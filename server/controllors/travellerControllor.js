const db = require("../config/dbconn.js");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { v4: uuidv4} = require("uuid");
const config = require("../config/main.config.js")

const register = (req, res) => {

    //check if user exist
    const qu = "SELECT * FROM user_traveller WHERE email = ? or phoneNumber = ?";
    db.query(qu, [req.body.email, req.body.phoneNumber], (err, data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User Exists!");
        //hash the password
        saltRound = 10;
       const hashedPassword = bcrypt.hash(req.body.password, saltRound, (err, data) => {
           if(err) console.log(err);
       }); 
        const userId = uuidv4();
        const verificationCode = Math.floor(100000 + Math.random() * 900000);
        const isVerifyed = false;
        const createdAt = new Date().toISOString();
        const q = "INSERT INTO user_traveller(userId, fullName, email, phoneNumber, password, verificationCode, isVerifyed, created_at) VALUES (?)";
        const values = [
            userId,
            req.body.fullName,
            req.body.email,
            req.body.phoneNumber,
            hashedPassword,
            verificationCode,
            isVerifyed,
            createdAt,
        ];
        db.query(q, [values], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            const token = jwt.sign({ userId: data[0].userId }, config.jwtSecret);
            const {password, ...other} = data[0];
    
            res
              .cookie("access_token", token, {
                httpOnly:true,
            })
              .status(200)
              .json(other);
            console.log("user created!")
            return res.status(200).json("User has been created");
        });
    }); 
}


const verifyPhone = (req, res) => {
    //check if the user signed up by looking if these is a cookie 
    const token = req.cookie.access_token
    if (!token) return res.status(401).json("user not sign up");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");

         //check if user exist
        const q = "SELECT * FROM user_sender WHERE userId = ?";
        db.query(q, [userInfo.userId], (err, data) => {
           if (err) return res.json(err);
           if (data.length === 0) return res.status(404).json("user not found");

        //check if the account is verifyed
        if (data[0].isVerifyed === true) return res.status(404).json("User already verifyed!");
        const storedCode = data[0].verificationCode
        if (req.body.verificationCode === storedCode) {
          const q = "UPDATE user_traveller SET isVerifyed = true WHERE userId = ?";
          db.query(q, [userInfo.userId], (err, data) => {
            if (err) return res.json(err);
            if (data.length) return res.status(200).json("User has been verifyed");
           });
        }
    });
  });
  //clear the cookie and redirect it to login page
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true
   }).status(200).json("user hasbeen logged out") 
};



const login = (req, res) => {
    //check if user exist
    const q = "SELECT * FROM user_traveller WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("user not found");
        //if (data[0].isVerifyed === false) return res.status(400).json("You are not verifyed");
        //check password
        const isPasswordCorrect = bcrypt.compare(req.body.password, data[0].password);
        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password");
       
        const token = jwt.sign({ userId: data[0].userId }, "andoMhdyritycthdbsgdcptyhNHtDEDL");
        const {password, ...other} = data[0];

        res
          .cookie("access_token", token, {
            httpOnly:true,
        })
          .status(200)
          .json(other);
    });
    
};
const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("user hasbeen logged out")
};


module.exports = {
    register, 
    verifyPhone, 
    login,
    logout
  };