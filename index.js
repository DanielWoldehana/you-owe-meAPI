const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const DebtsController = require("./db/DebtsController");

const app = express();

app.use(cors());
app.set("port", process.env.PORT || 3001);
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/api/Debts", DebtsController);
app.listen(app.get("port"), () => {
  console.log("Thor is teleporting through port " + app.get("port"));
});
