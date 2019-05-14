const express = require("../node_modules/express");
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

router.get("/name/:name", (req, res) => {
  DebtsModel.find({ name: req.params.name })
    .then(debt => {
      res.json(debt);
    })
    .catch(err => {
      console.error(err);
    });
});

router.post("/newDebt", (req, res) => {
  DebtsModel.create(req.body)
    .then(debt => {
      res.json(debt);
    })
    .catch(err => {
      console.error(err);
    });
});

router.put("/update/:name", (req, res) => {
  DebtsModel.update({ name: req.params.name }, req.body)
    .then(debt => {
      res.json(debt);
    })
    .catch(err => {
      console.error(err);
    });
});

router.delete("/delete/:name", (req, res) => {
  DebtsModel.deleteOne({ name: req.params.name })
    .then(debt => {
      res.json(debt);
    })
    .catch(err => {
      console.error(err);
    });
});
module.exports = router;
