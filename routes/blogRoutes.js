const express=require('express')
const { Schema } = require('mongoose')
const router = express.Router()

const {blog}=require("../Schema")

// const blog=[{text:"this is fithawit",age:55},{name:"esey",age:55},{addres:"addis abeba"}]

router.get('/list',async (req,res)=>{
    
    const blogsList=await blog.find({})
    
    res.render('blogs',{blogs:blogsList})
});

router.get('/create',(req,res)=>{
    res.render('blogForm')
});
router.post('/',(req,res)=>{
    res.render('blogform',)
})

router.post('/create',(req,res)=>{

    new blog(req.body).save()
   
   
    console.log(req.body)
    // blog.push(req.body)
    res.send('added')
})
router.get('/NewArticle',(req,res)=>{
    res.render('blogform',{advertizepage:'this is for advertize'})
})
router.post('/NewArticle',(req,res)=>{
    res.render('NewArticle',{advertizepage:'this is for advertize'})
})

router.delete('/list',(req,res)=>{
    res.send('deleted')
})


module.exports=router