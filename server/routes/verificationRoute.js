const express = require("express");
const router = express.Router();
const config = require('../config/main.config.js')
const verificationController = require("../controllors/verificationControllor.js");


router.post('/verifySender', async (req, res) => {
    try {
        const {phoneVerification} = req.body;
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json("user Not Logge In!");
    
        jwt.verify(token, config.jwtSecret, (err, userInfo) => {
            if(err) return res.status(403).json("Token is not valid");
            const userId = userInfo.userId;
            if(!phoneVerification) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const tableName = 'user_sender'
        const verifyData = {
            tableName,
            userId,
            phoneVerification
        };
        verificationController.phoneVerificationChecker(verifyData, (error, result) => {
            if (error) {
                console.error(error);
                //return res.status(500).json({ error });
            }
        });
        console.log('Verifyed successfully');
        });}
    catch (err) {
        console.error(err);
       //return res.status(500).json({ error: 'Error Verifying up' });
       console.log('Error Verifying!');
      }
 });


 router.post('/verifyTraveller', async (req, res) => {
    try {
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json("user Not Logge In!");
    
        jwt.verify(token, config.jwtSecret, (err, userInfo) => {
            if(err) return res.status(403).json("Token is not valid");
            const userId = userInfo.userId;
        if(!phoneVerification) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const tableName = 'user_traveller';
        const verifyData = {
            tableName,
            userId,
            phoneVerification
        };
        verificationController.phoneVerificationChecker(verifyData, (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error });
            }
        });
        console.log('Verifyed successfully');
        });}
    catch (err) {
        console.error(err);
       //return res.status(500).json({ error: 'Error Verifying up' });
       console.log('Error Verifying!');
      }
 });





 router.post('/verifyTraveller', async (req, res) => {
    try {
        const {userPhone, phoneVerification} = req.body;
        if(!userPhone || !phoneVerification) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const tableName = 'user_traveller'
        const verifyData = {
            tableName,
            userPhone,
            phoneVerification
        };
        verificationController.phoneVerificationChecker(verifyData, (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error });
            }
        });
        console.log('Verifyed successfully');
    }
    catch (err) {
        console.error(err);
       //return res.status(500).json({ error: 'Error Verifying up' });
       console.log('Error Verifying!');
      }
 });

 module.exports = router;