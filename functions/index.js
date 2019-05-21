const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccount.json');

// const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// adminConfig.credential = admin.credential.cert(serviceAccount);
// admin.initializeApp(adminConfig);
// console.log(adminConfig)

admin.initializeApp();

exports.test = functions.https.onRequest((req, res) => {
  res.send(functions.config());
});

exports.scheduledFunction = functions.pubsub.schedule('every 1 minutes').onRun(() => {
  console.log('This will be run every 1 minutes!');
});