import * as cors from "cors";
import * as express from "express";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

const serviceAccount = require("./serviceAccountKey.json");

// App config, using Cloud Firestore
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-chart-73cfd.firebaseio.com",
});

const db = admin.firestore();

// Express server config
const app = express();

// Allow to make petitions from other domain
app.use(cors({ origin: true }));

// Endpoint declaration
app.get("/goty", async (request, response) => {
  // Access to goty collection of the database and saves its reference
  const gotyRef = db.collection("goty");

  // Creates a snapshot from the database
  const snapshot = await gotyRef.get();

  // Filters the information from the obtained data
  const games = snapshot.docs.map((doc) => doc.data());

  response.json(games);
});

app.post("/goty/:id", async (request, response) => {
  const id = request.params.id;

  const gameRef = db.collection("goty").doc(id);

  const gameSnapshot = await gameRef.get();

  if (!gameSnapshot.exists) {
    response.status(404).json({
      done: false,
      message: "There is no game with that ID: " + id,
    });
  } else {
    const prevState = gameSnapshot.data() || { votes: 0 };

    await gameRef.update({
      votes: prevState.votes + 1,
    });

    response.json({
      done: true,
      message: "Thanks for voting",
    });
  }
});

// Exports the api to do requests from angular
export const api = functions.https.onRequest(app);
