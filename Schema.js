const mongoose = require('mongoose');

const userSchema=  mongoose.Schema({
  name:String,
  email:String,
  password:String
})

const blogSchema = new mongoose.Schema({
  title: {
    type:String,
    title:false,
    
  }, // String is shorthand for {type: String}
  author: {
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const blog=mongoose.model("Blog",blogSchema)
const user=mongoose.model("user",userSchema)


module.exports={blog,user}
