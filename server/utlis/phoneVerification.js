const { Vonage } = require('@vonage/server-sdk')
const apiKey = '0a0368b0';
const apiSecret = 'OeckU2Y6lvKca4yH';
const client = new Vonage(apiKey, apiSecret);

 exports.sendVerificationCode =  function (phoneNumber, verificationCode) {
    client.messages
      .create({
        body: `Your verification code for signup in shipmate is: ${verificationCode}`,
        from: "Shipmate",
        to: phoneNumber,
      })
      .then((message) => console.log('Verification code sent:', message.sid))
      .catch((error) => console.error('Error sending verification code:', error));
  }