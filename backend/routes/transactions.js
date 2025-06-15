const router = require("express").Router();
const { addIncome } = require("../controllers/Income");

router.post("/addIncome", addIncome);

module.exports = router;
