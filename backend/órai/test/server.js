const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host:"127.0.0.1",
    port: 3307,
    password: "",
    database: "kozutak"
})

app.get("/", (req, res) => {
    res.send("Fut a backend.")
})

app.get("/regiok", (req, res) => {
    const sql = "SELECT * FROM `regiok`"
    db.query(sql, (err, result) =>{
        if (err) return res.json(err);
        return res.json(result)
    })
})

app.get("/alfold", (req, res) => {
    const sql = "SELECT * FROM `regiok` WHERE Rid = 8"
    db.query(sql, (err, result) =>{
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})