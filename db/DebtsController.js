const express = require("express");
const router = express.Router();

const DebtsModel = require("./DebtsModel");

router.get("/", (req, res) => {
  DebtsModel.find({})
    .then(debt => {
      res.json(debt);
      console.log(debt);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
