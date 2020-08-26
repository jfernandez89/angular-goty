import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const serviceAccount = require("./serviceAccountKey.json");

// App config, using Cloud Firestore
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-chart-73cfd.firebaseio.com",
});

const db = admin.firestore();

// Start writing Firebase Functions //
export const helloWorld = functions.https.onRequest((request, response) => {
  response.json("Hello from Firebase!");
});

// The async function allows to control promises
export const getGoty = functions.https.onRequest(async (request, response) => {
  // Access to goty collection of the database and saves its reference
  const gotyRef = db.collection("goty");

  // Creates a snapshot from the database
  const snapshot = await gotyRef.get();

  // Filters the information from the obtained data
  const games = snapshot.docs.map((doc) => doc.data());

  response.json(games);
});
