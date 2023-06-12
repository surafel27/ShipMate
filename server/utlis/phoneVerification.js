const twilio = require('twilio');
const accountSid = "AC3366a533420cb0ccfa72f06bb0d32229";
const authToken = "624cd156907813924ee2c06c22f2a637";
const client = twilio(accountSid, authToken);

 exports.sendVerificationCode =  function (phoneNumber, verificationCode) {
    client.messages
      .create({
        body: `Your verification code for signup in shipmate is: ${verificationCode}`,
        from: '+13613043472',
        to: phoneNumber,
      })
      .then((message) => console.log('Verification code sent:', message.sid))
      .catch((error) => console.error('Error sending verification code:', error));
  }