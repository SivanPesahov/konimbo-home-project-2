// Middleware
import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// -- for deployment
// app.use(express.static("public"));

app.use(express.json());
app.use(cors());

export default app;
