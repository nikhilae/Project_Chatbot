const express= require('express');
const app1=express();
const bodyParser=require('body-parser');
const MongoClient=require('mongodb').MongoClient;
const url='mongodb://127.0.0.1:27017';
const dbName="mpdb";
let server=require('./server1');
let db;
app1.use(bodyParser.urlencoded({extended: true}));
app1.use(bodyParser.json({ type: 'application/json' }))

let server1=require('./server1');

const col_name="phnuser";
MongoClient.connect(url, (err,client)=>{
        if(err) return console.log(err);
        db=client.db(dbName);
   
    console.log(`Connected Database: ${url}`);
        console.log(`Database : ${dbName}`);
});
app1.post('/p',function(req,res){
    var phno=req.body.phno;
    console.log(phno);
    var h=db.collection(col_name).find({"phno":phno}).toArray().then(result => res.json(result));
});
app1.listen(3000);