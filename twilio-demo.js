var twilio = require('twilio');
var accountSid = 'your_account_sid'; // Your Twilio account SID
var authToken = 'your_auth_token'; // Your Twilio auth token
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to:   '+14696659354',     // recipient's real-world cell number
    from: '+14155551111'      // your Twilio phone number
})
.then((message) => console.log(message.sid));
