const mongoose = require("./connections");

const AllDebts = require("./TheyOweMe.json");
const DebtsModel = require("./DebtsModel");

DebtsModel.deleteMany({}).then(() => {
  // for (let i = 0; i < DebtsModel.length; i++) {
  DebtsModel.create(AllDebts).then(debts => {
    console.log(debts);
  });
  // }
});
