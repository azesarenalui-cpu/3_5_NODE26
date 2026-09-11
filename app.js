const conn = require('./conn.js');

const express = require('express');

const app = express();

const port = 9000;
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render(`index`);
})

app.post('/register', (req, res) => {
    const lastname =req.body.lastname;
    const firstname = req.body.firstname;
    const age = req.body.age;
    res.render('content', { lastname, firstname, age });

    const insert = `INSERT INTO tbl_students VALUES('0','${lastname}','${firstname}','${age}')`;

    conn.query(insert, (err, result) => {
        if(err) throw err;
        console.log("data inserted");
        res.send(`<script>
            alert('data inserted'); 
            location.href='/'; </script>`);
        });
});
app.listen(9000, () => {
    console.log("server is running on port 9000");
});
