const express = request('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

//parser application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
    host: 'localhost';
    user:'root';
    password:'';
    database:'restful_db'
});

//connect to databae
conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql Connected...');
});

//tampilkan semua data product
app.get('/api/products', (req, res) => {
    let sql = "SELECT * FROM product";
    let query = conn.query(sql, (err, result) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
    });
});

