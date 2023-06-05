const express = require("express");
const cors = require("cors");
const senderControllor = require("../controllors/senderControllor.js")
const router = express.Router();

router.use(cors());
router.post('/register', senderControllor.register);
router.post('/login', senderControllor.login);
router.post('/verification', senderControllor.verifyPhone);
router.post('/logout', senderControllor.logout);



module.exports = router;