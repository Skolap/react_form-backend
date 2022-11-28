//Import Statement
const express = require("express");
const dataRouter = require("./routes/index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Configuration
dotenv.config();
const port = process.env.PORT || 3000;
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => {
    console.log(err);
  });

//Server Initialization
const server = express();

//Server middleware
server.use(express.json());
server.use("/form", dataRouter);

//Server Routes
server.get("/", (req, res) => {
  res.send("Creating Imgur App");
});
//Server start
server.listen(port, () => {
  console.log(`Server started on ${port}`);
});
