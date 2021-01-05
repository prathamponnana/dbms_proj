const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

// const db = mysql.createConnection({
//     host:'card-db.c3sguqkrjced.us-east-2.rds.amazonaws.com' ,
//     user: 'admin' ,
//     password: 'DBMSboys',
//     port: '3306',
//     database: 'card'
// });


// db.connect((err)=>{
//     if(err) console.log(err);
//     console.log('Congratulations. Connection established!!!')
// });

// app.get('/test',(req,res) =>{
//     let sql1 = `insert into person values('cvb',95)`;
//     let sql = `select * from person where name = 'vb'`;
//     console.log(sql);
//     db.query(sql, (err, result)=>{
//         if(err) throw err;
//         res.send('Updated...')
//         console.log(result);
//     });
// });
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'public')));


app.post('/CSU/add-number.html',(req, res)=>{
    res.send('Thanks for posting that')
});
 
app.listen(3000,()=>{
    console.log("Server up and running");
});
