const router = require("express").Router();
const { addIncome, getIncome, deleteIncome } = require("../controllers/Income");

router.post("/addIncome", addIncome).get("/getIncome", getIncome).delete("/deleteIncome/:id", deleteIncome);

module.exports = router;
