const express=require('express')
const app=express()
const db=require("./db")

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
app.use(express.static("./public"))

const session=require("express-session")
app.use(session({
    secret: 'fithawit',
    saveUninitialized: true,

  }))
  app.get('/', (req, res)=>{
    res.render('blogForm');
  })
  app.get('/NewArticle', (req, res)=>{
    res.render('NewArticle');
  })

const blogRoutes=require("./routes/blogRoutes")
const userRoutes=require("./routes/userRoutes")

app.use('/user',userRoutes)
app.use('/blog',blogRoutes)

app.get('/',(req,res)=>{
    res.render('home',{pagename:"login",})
});
app.get('/comment',(req,res)=>{
    res.render('home',{commentpage:"this is for comment page"})
});
app.post('/comment',(req,res)=>{
    res.render('comment',{commntpage:"this is for comment page"})
});

app.listen(3005,()=>{
    console.log('http://localhost:3005')
});