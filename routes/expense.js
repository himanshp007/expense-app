const express = require('express');

const router = express.Router();

const userController = require('../controllers/expense');

router.post('/add-expense', userController.postExpense);

router.get('/get-expense', userController.getAllExpense);

router.put('/edit-expense/:Id', userController.editExpense);

router.delete('/delete-expense/:Id', userController.deleteExpense);

module.exports = router;