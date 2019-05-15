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
  interestRate: String,
  paid: Boolean
});

module.exports = mongoose.model("Debt", DebtsOwed);
