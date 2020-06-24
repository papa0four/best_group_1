import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/guestRoutes";
import userRoutes from "./routes/user/userRoutes";

const connectDB = require("./config/db");

const app = express();

const PORT = 8000;

// Connect Database
connectDB();

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

routes(app);

app.use("/user", userRoutes);

app.get("/", (req, res) =>
  res.send(`Our HAMS application is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your HAMS server is running on port ${PORT}`)
);
