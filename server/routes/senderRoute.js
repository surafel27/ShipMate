const express = require("express");
const senderControllor = require("../controllors/senderControllor.js")
const router = express.Router();

router.post('/register', senderControllor.register);
router.post('/login', senderControllor.login);
router.post('/verification', senderControllor.verifyPhone);
router.post('/logout', senderControllor.logout);



module.exports = router;