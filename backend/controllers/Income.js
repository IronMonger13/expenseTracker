const IncomeSchema = require("../models/IncomeModel");

// adding income to db
exports.addIncome = async (req, res) => {
    // Rerieveing data from body
    const { title, amount, category, description, date } = req.body;

    // Creating new instance
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
    });

    // Adding the received data to db
    try {
        // validations
        if (!title || !amount || !category || !date) {
            return res.status(400).json({ message: "Please fill all the required fields" });
        }
        if (amount <= 0 || !amount == "number") {
            return res.status(400).json({ message: "Amount must be a positive number" });
        }

        // Saving to db
        await income.save();
        res.status(200).json({ message: "Income added" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }

    console.log(income);
};

// getting income from db
exports.getIncome = async (req, res) => {
    try {
        // finding income and sorting in decreasing order so that last created appears first
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// deleting income from db
exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: "Income deleted" });
        })
        .catch((error) => {
            res.status(500).json({ message: "Server Error" });
        });
};
