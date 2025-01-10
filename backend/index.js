const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


app.use(express.json());
app.use(cors());

const mongoURL = process.env.MONGODB_URL;
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
    try {
        mongoose.connect(mongoURL, (err) => {
          if (err) throw err;
          console.log("Mongodb connected...");
        });
      } catch (error) {
        console.log("Error in mongoDB connect ", error);
      }
});
