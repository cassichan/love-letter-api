import express from "express";
import cors from "cors";
import functions from "firebase-functions";
import { getAllLetters, addLetter } from "./letters.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/letters", getAllLetters);
app.post("/letter/add", addLetter);

export const api = functions.https.onRequest(app);
