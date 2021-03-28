// The Cloud Functions for Firebase SDK to create Cloud Functions and setup
// triggers.
const functions = require('firebase-functions');
const cors = require('cors');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.submitProfile = functions.https.onRequest((request, response) => {
  res.set('Access-Control-Allow-Origin', '*');
  cors()(request, response, () => {
    functions.logger.info("Sending Profile form data!", {structuredData: true});
    let body = request.body;
    const writeResult = admin.firestore().collection('profile').add(body);
    response.json({result: `Profile with ID: ${writeResult.id} added/modified!`});
  })
});


