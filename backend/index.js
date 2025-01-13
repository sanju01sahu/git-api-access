const express = require("express");
const cors = require("cors");
const { connection } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
const userRouter = require("./routes/user.routes");
app.use("/api", userRouter);

app.listen(8080, async () => {
  console.log("backend is runing");
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    console.log("error getting to connect with data base");
  }
});
