import {connectDB} from "./db.js"
import {PORT} from "./config.js"


import express from "express";
import postsRoutes from "./routes/posts.routes.js";
import cors from "cors";


const app = express()

//middlewares
app.use(express.json())


//rutas
app.use(cors());
app.use(postsRoutes);
connectDB();


app.listen(PORT)
console.log("server iniciado en puerto", PORT);