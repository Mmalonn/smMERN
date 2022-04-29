import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import postRoutes from "./routes/posts.js"

const app = express();

app.use(cors());
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


const MONGODB_URI = process.env.URI;
const PORT = process.env.PORT;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });