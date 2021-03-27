// The Cloud Functions for Firebase SDK to create Cloud Functions and setup
// triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.submitProfile = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Sending Profile form data!", {structuredData: true});
  let body = request.body;
  const writeResult = await admin.firestore().collection('messages').add(body);
  response.json({result: `Profile with ID: ${writeResult.id} added/modified!`});
});


