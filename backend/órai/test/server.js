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

app.get("/regiok_8", (req, res) => {
    const sql = "SELECT * FROM `regiok` WHERE Rid = 8"
    db.query(sql, (err, result) =>{
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.post("/ujregio", (req, res) =>{
    const sql = "INSERT INTO `regiok` (`Rid`, `regionev`, `regio_tipusa`) VALUES ('',?,?)"
    const values = ['11', 'Budapest', 'Főváros']

    db.query(sql,values, (err, result) => {
        if(err){
            console.error("hiba történt", err)
            return res.status(500).json({error: "Adatbázis hiba történt"})
        }
        return res.status(200).json({message: "Sikeres beszúrás!", result})
    })
})

app.post("/ujregiok", (req, res)=> {
    const sql = "INSERT INTO `regiok` (`Rid`, `regionev`, `regio_tipusa`) VALUES ('', ?, ?)"
    const values = [['12', 'Bugyi', 'Város'],['13','Hernád','Kisváros']]

    db.query(sql,[values], (err,result) =>{
        if(err){
            console.error("hiba tortent",err)
            return res.status(500).json({error: "hiba történt"})
        }

        return res.status(200).json({message:"sikeres beszúrás", result})
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})