const router = require("express").Router();
const { addExpense, getExpense, deleteExpense } = require("../controllers/Expense");
const { addIncome, getIncome, deleteIncome } = require("../controllers/Income");

// Setting up the routes
router
    .post("/addIncome", addIncome)
    .get("/getIncome", getIncome)
    .delete("/deleteIncome/:id", deleteIncome)
    .post("/addExpense", addExpense)
    .get("/getExpense", getExpense)
    .delete("/deleteExpense/:id", deleteExpense);

module.exports = router;
