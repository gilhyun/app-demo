const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createProfile = functions.auth.user().onCreate(event => {
  return admin.database().ref(`/users/${event.data.uid}`).set({
    email: event.data.email,
    status: 'online'
  });
});
