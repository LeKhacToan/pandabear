require("dotenv").config();
const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_PHONE_NUMBER;
console.log(accountSid);
const client = new twilio(accountSid, authToken);

function sendSms(mess, to) {
  client.messages
    .create({
      body: mess,
      to, // Text this number
      from, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

module.exports.sendSms = sendSms;
