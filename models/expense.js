const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    amount: Sequelize.DOUBLE,
    discription: {
        type: Sequelize.STRING,
    },
    category: {
        type: Sequelize.STRING,
    }
});

module.exports = Expense;