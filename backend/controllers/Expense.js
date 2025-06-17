const ExpenseSchema = require("../models/ExpenseModel");

// adding expense to db
exports.addExpense = async (req, res) => {
    // Rerieveing data from body
    const { title, amount, category, description, date } = req.body;

    // Creating new instance
    const expense = ExpenseSchema({
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
        await expense.save();
        res.status(200).json({ message: "Expense added" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }

    console.log(expense);
};

// getting expense from db
exports.getExpense = async (req, res) => {
    try {
        // finding expense and sorting in decreasing order so that last created appears first
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// deleting expense from db
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({ message: "Expense deleted" });
        })
        .catch((error) => {
            res.status(500).json({ message: "Server Error" });
        });
};
