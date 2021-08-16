// const express = require("express");
import express from "express";
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");

require("dotenv").config();

const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR ", err));

app.use(cors());
app.use(morgan("dev"));

// routes middleware
app.use("/api", authRoutes);

app.listen(8000, () => console.log("Server is runnin on port 8000"));
