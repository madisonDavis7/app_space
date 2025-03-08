const axios = require('axios')
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require('firebase-admin');

//change to an onrequest + write to db 
//new file connecting to same project in firebase
//create a new firebase file (not project) and deploy
//need new functions

admin.initializeApp();
const db = admin.firestore();
const dbRef = db.collection("facts").doc("current");

//have a button that users push to generate current location
//add a map using ionic
exports.spaceAPI = onRequest(async (req, res) => {

    const response = await axios.get('http://api.open-notify.org/iss-now.json?callback=?'); //api endpoint
    dbRef.set({
        current: JSON.parse(response.data.slice(2, -1)), //make data more readable in db
    })
});
