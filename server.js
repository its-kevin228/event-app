const express = require('express');
const ejs=require('ejs');
const mongoose = require('mongoose')
const Event = require('../models/Events');
const app = express();

//databse connection

mongoose
   .connect(process.env.dburl)
   .then((result)=>{
    console.log("MongoDb connected");
 app.listen(3000,()=>{
    console.log("server started on port 3000");
 });
   })
   .catch((err)=>{
    console.log("Connection connect to MongoDb",err);
 });


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
res.send("hello");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

//form submited
app.post('/submit-event', (req, res) => {
const event = new Event(req.body);
event.save()
.then((result)=>{
    res.redirect('/');
})
.catch((err)=>{
    console.error(err);
})
});