const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const GitUserRoute = require("./routes/GitUserRoute");


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/gitApi", GitUserRoute);

const mongoURL = process.env.MONGODB_URL;
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
    try {
        mongoose.connect(mongoURL);
        console.log("Mongodb connected...");
      } catch (error) {
        console.log("Error in mongoDB connect ", error);
      }
});



