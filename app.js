const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const expenseRoutes = require('./routes/expense');

app.use(cors());
// {
//     origin: 'http://127.0.0.1:5500'
// }
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/expense', expenseRoutes);

sequelize.sync().then((result) => {
    // console.log(result);
    app.listen(3000);
}).catch(err => console.log(err));
