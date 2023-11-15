const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fithawit');

const db=mongoose.connection

db.on('error',()=>{console.log("unable to connect")})

db.once('open',()=>{console.log("connected")})


module.exports=db