const Data = require("../models/index");

// Get All Data
exports.getData = async (req, res) => {
  try {
    const data = await Data.find({}).exec();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

// Insert Data
exports.insertData = async (req, res) => {
  try {
    const data = new Data(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

// Not Used in this project
exports.getImageByID = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

// Not used in this progect
exports.deleteImages = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};
