const db = require("../config/dbconn.js");
const { v4: uuidv4} = require("uuid");
const jwt = require("jsonwebtoken");
const config = require("../config/main.config.js");
const { post } = require("../routes/senderRoute.js");
const moment = require("moment");

const addPackage = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("user Not Logge In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");
        const userId = userInfo.userId;
        const packageId = uuidv4();
        const createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        const q = "INSERT INTO package (packageId, packageFrom, packageTo, packageWeight, packageCat, packageDate, packageDesc, packagePrice, userId, created_at) VALUES (?,?,?,?,?,?,?,?,?,?)";
            console.log(req.body.packageWeight) 
        db.query(q, [packageId,
            req.body.packageFrom,
            req.body.packageTo,
            req.body.packageWeight,
            req.body.packageCat,
            req.body.packageDeliveryDate,
            req.body.packageDesc,
            req.body.packagePrice,
            userId,
            createdAt,], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }
            console.log("package add created!")
            return res.status(200).json({messag: "package has been created"});
        });
});
}


const getPackages = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json(" user Not Logge In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");

        const q = req.query.cat ? "SELECT * FROM package WHERE cat = ?" : "SELECT * FROM package"; 
        db.query(q, [req.query.cat], (err, data) => {
           if (err) return res.json(err);
           
           return res.status(200).json(data);
    });
});
}

const singlePackage = (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json(" user Not Logged In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");

        const q = "SELECT fullName, packageFrom, packageTo, packageWeight, packageCat, packageDate, packageDesc, packagePrice, FROM  user_sender u JOIN package p ON u.userId=p.userId WHERE P.packageId = ?";
        db.query(q, [req.params.packageId], (err, data) => {
            if (err) return res.status(403).json("No package with these Id");

            return res.status(200).json(data[0]);
        });

    });

}
const myPackage = (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json(" user Not Logged In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");
       
       // const q = "SELECT packageFrom, packageTo, packageWeight, packageCat, packageDate, packageDesc, packagePrice FROM package WHERE userId = (SELECT fullName, userId FROM user_sender WHERE userId = ?);"
        const q = "SELECT fullName, packageFrom, packageTo, packageWeight, packageCat, packageDate, packageDesc, packagePrice FROM  user_sender u JOIN package p ON u.userId=p.userId WHERE P.userId = ?";
        db.query(q, [userInfo.userId], (err, data) => {
            if (err) return res.status(403).json("No package with these Id");

            return res.status(200).json(data[0]);
        });

    });

}


const updatePackage= (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json(" user Not Logged In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");
        
        const packageId = req.params.packageId;
        const q = "UPDATE package SET packageFrom = ?, packageTo = ?, packageDesc = ?, packageDate = ?, packagePrice = ?, packageWeight = ? WHERE userId = ? AND packageId = ?;"

        db.query(q, [req.body.packageFrom,
            req.body.packageTo,
            req.body.packageDesc,
            req.body.packageDate,
            req.body.packagePrice,
            req.body.packageWeight, packageId, userInfo.userId], (err, data) =>{
            if (err) return res.status(500).json(err);
            return res.json("post has been updated");
        });
    });
}


const deletePackage = (req, res) => {
    const token = req.cookies.access_tooken
    if (!token) return res.status(401).json(" user Not Logge In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");

        const packageId = req.params.packageId;
        const q = "DELETE FROM package WHERE packageId = ? AND userId = ?";

        db.query(q, [packageId, userInfo.userId], (err, data) => {
            if (err) return res.status(403).json("You only delete Your Package Post");

            return res.json("Post Deleted");
        })

    });

}

module.exports = {
    addPackage,
    getPackages,
    singlePackage,
    myPackage,
    updatePackage,
    deletePackage
  };