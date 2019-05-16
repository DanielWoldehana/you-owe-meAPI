const mongoose = require("./connections");
const Schema = mongoose.Schema;

const DebtsOwed = new Schema({
  name: String,
  moneyOwed: Number,
  reason: String,
  dueDate: String,
  picture: String,
  phoneNumber: String,
  email: String,
  interestRate: String
});

module.exports = mongoose.model("Debt", DebtsOwed);
