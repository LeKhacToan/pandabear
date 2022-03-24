require("dotenv").config();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_PHONE_NUMBER;
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'testtttt',
    to: '+84964967751', // Text this number
    from, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
