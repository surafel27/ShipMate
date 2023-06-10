const express = require("express");
const travellerControllor = require("../controllors/travellerControllor.js")
const router = express.Router();

router.post('/register', travellerControllor.register);
router.post('/verification', travellerControllor.verifyPhone);
router.post('/login', travellerControllor.login);
router.post('/logout', travellerControllor.logout);




module.exports = router;