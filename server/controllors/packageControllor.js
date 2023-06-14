const db = require("../config/dbconn.js");
const { v4: uuidv4} = require("uuid");
const jwt = require("jsonwebtoken");
const config = require("../config/main.config.js");
const moment = require("moment");

//add package to the package table
const addPackage = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("user Not Logge In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");
        const userId = userInfo.userId;
        const packageId = uuidv4();
        const createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        const q = "INSERT INTO package (packageId, packageFrom, packageTo, packageWeight, packageCat, packageDate, packageDesc, packagePrice, userId, created_at) VALUES (?,?,?,?,?,?,?,?,?,?)";
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

//get all package
const getPackages = (req, res) => {
       //const q = "SELECT * FROM package"; 
        const q ="SELECT user_sender.fullName, packageId, packageFrom, packageTo, packageWeight, packageCat, packageDate, packageDesc, packagePrice, package.created_at FROM  package JOIN user_sender ON user_sender.userId = package.userId";
        db.query(q, (err, data) => {
           if (err) return res.json(err);
           return res.status(200).json(data);
    });
}

//get single package by id
const getPackage = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json(" user Not Logge In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");

        const q = req.query.cat ? "SELECT * FROM package WHERE packageCat = ?" : "SELECT * FROM package"; 
        db.query(q, [req.query.packageCat], (err, data) => {
           if (err) return res.json(err);
           
           return res.status(200).json(data);
    });
});
}

//get single package
const singlePackage = (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json(" user Not Logged In!");
  
    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");

       const q = "SELECT user_sender.fullName, packageFrom, packageTo, packageWeight, packageCat, packageDate, packageDesc, packagePrice, package.created_at FROM package JOIN user_sender ON user_sender.userId = package.userId WHERE packageId = ?";
       db.query(q, [req.params.packageId], (err, data) => {
            if (err) return res.status(403).json("No package with these Id");

            return res.status(200).json(data[0]);
        });
    });
}
//print all package
const myPackage = (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json(" user Not Logged In!");

    jwt.verify(token, config.jwtSecret, (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid");
       
         const q = "SELECT fullName, packageFrom, packageTo, packageWeight, packageCat, packageDate, packageDesc, packagePrice FROM  user_sender u JOIN package p ON u.userId=p.userId WHERE P.userId = ?";
        db.query(q, [userInfo.userId], (err, data) => {
            if (err) return res.status(403).json("No package with these Id");

            return res.status(200).json(data[0]);
        });
    });
}
//update the package 
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
//delete the package
const deletePackage = (req, res) => {
    const token = req.cookies.access_token
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
    getPackage,
    singlePackage,
    myPackage,
    updatePackage,
    deletePackage
  };