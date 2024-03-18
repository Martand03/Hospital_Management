import express from 'express'
import mysql from 'mysql'
import cors from 'cors'




const app =express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Martandsql@03',
    database: 'hospital_management'
})


app.get('/',(re,res)=> {
    return res.json("From backend");
})

app.get('/doctors',(req,res)=>{
    const sql= "SELECT * FROM doctors";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(8081, () =>{
    console.log("connected to server")
})