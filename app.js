const conn = require('./conn.js');

const express = require('express');

const app = express();

const port = 9000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const db =mysql.createConnection({
    host: 'localhost',
    user: "root",
    password:"",
    database: "ui_3_3_26"
});



app.get('/', (req, res) => {
    res.render(`index`);
})


app.post('/register', (req, res) => {
    const lastname =req.body.lastname;
    const firstname = req.body.firstname;
    const age = req.body.age;
    res.render('content', { lastname, firstname, age });
});
app.listen(9000, () => {
    console.log("server is running on port");
});
