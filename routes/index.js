//Import Express
const express = require("express");
const { getData, insertData } = require("../controller/index");

//Define Router
const Router = express.Router();

//Define list Of routes
Router.get("/", getData);
// Router.get("/:id", getImageByID);
Router.post("/", insertData);
// Router.delete("/delete", deleteImages);

//Export Router
module.exports = Router;
