const Expense = require('../models/expense');

exports.postExpense = async (req, res, next) => {

    try{

        if (!req.body.amount) {
            throw new Error("Amount is mandatory");
        }
        const {amount, discription, category} = req.body;


        console.log(+amount, discription, category);

        await Expense.create({
            amount: +amount,
            discription: discription,
            category: category
        })
        .then(response => res.status(200).json({ message: 'Expense added successfully!' }))
    } catch (err) {
        res.status(500).json({
            error: err,
            message: "error from postExpense"
        });
    }
    
};

exports.getAllExpense = async (req, res, next) => {
    try {
        await Expense.findAll()
        .then(result => {
            res.status(200).json( {expenses : result} );
        }).catch(err => console.log(err));

    }catch (err) {
        res.status(500).json({error : err.message});
    };
    
};

exports.editExpense = async (req, res, next) => {
    try {
        const expenseId = req.params.Id;

        await Expense.destroy({
            where: {
              id: expenseId
            },
          })
        .then(result => {
            res.status(200).json({data: result});
        })
    }catch (err) {
        res.status(500).json({error : err.message, message: "error from editExpense"});
    };
};

exports.deleteExpense = async (req, res, next) => {
    try {
        const expenseId = req.params.Id;

        await Expense.destroy({
            where: {
              id: expenseId
            },
          })
        .then(result => {
            res.status(200).json({message: "Deleted Successfully"});
        })
    }catch (err) {
        res.status(500).json({error : err.message});
    };
};