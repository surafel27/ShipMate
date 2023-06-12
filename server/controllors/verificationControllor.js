const db= require('../config/dbconn.js');

const phoneVerificationChecker = async (verifyData) => {
  try {
    const { tableName, userId, phoneVerification } = verifyData;
    const [result] = await dbConn.query("SELECT * FROM ?? WHERE userId = ?", [tableName, userId]);
    if (result.length > 0) {
      const storedVerificationCode = result[0].verificationCode;
      if (phoneVerification === storedVerificationCode) {
        await dbConn.query("UPDATE ?? SET isVerifyed = 'true' WHERE userId =?", [tableName, userId]);
        console.log("Verification code is similar");
      } else {
        console.log("Code is not similar!");
      }
    } else {
      console.log('User not found');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { phoneVerificationChecker };