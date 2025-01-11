import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./connectDb.js";
import { getLetter, postLetter } from "./controllers/letter.controllers.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.get("/letter/get", getLetter);
app.post("/letter/post", postLetter);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
  connectToMongoDB();
});
