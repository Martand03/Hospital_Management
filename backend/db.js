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

app.get('/patients',(req,res)=>{
    const sql= "SELECT * FROM patients";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/appointments', (req, res) => {
    const sql = 'SELECT * FROM appointments';
    db.query(sql, (err, data1) => {
      if (err) return res.json(err);
      return res.json(data1);
    });
  });

app.post('/patients', (req,res)=>{
    const { name, age, gender, date, contact } = req.body; 

    const sql= "INSERT INTO appointments (name, age, gender, date, contact) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [name, age, gender, date, contact], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})



app.listen(8081, () =>{
    console.log("connected to server")
})