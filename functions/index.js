const functions = require("firebase-functions");

const app = require('express')();

const FBAuth = require('./util/fbauth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login, uploadImage } = require('./handlers/users');


//Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.post('/user/image', FBAuth, uploadImage);

//Users routes
app.post('/signup', signup);
app.post('/login', login);

exports.api = functions.https.onRequest(app);