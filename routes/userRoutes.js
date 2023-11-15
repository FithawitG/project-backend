const express=require('express')
const router = express.Router()
const {user}=require('../Schema')
const bcrypt=require("bcrypt")

// router.get('/',(req,res)=>{
//     res.json(user)
// })
 //this is for cheking id in session
function cheakLoggedin(req,res,next){
        if(req.session.user){
            next()
        }else{
            res.redirect('/user/login')
        }

}

router.get('/',cheakLoggedin,(req,res)=>{
    console.log(req.session.user)
    res.render('users',{text:'for register',name:"fithawit"})
});

router.post('/',(req,res)=>{
    console.log(req.body)
    // user.push(req.body)
    res.send('added')
});
 
router.delete('/',(req,res)=>{
    res.send('deleted')
});

router.get('/register',(req,res)=>{

    res.render('signup')
});
//this is for password security
router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body
    const newUser=new user({
        name:name,
        email:email,
        password:await bcrypt.hash(password,10)
    })
    newUser.save()

    res.send('saved')
});

router.post('/login',async (req,res)=>{
const {email,password}=req.body

    const myuser= await user.findOne({email:email})

    if(!myuser){
       return res.send(' user not found')
    }


    const matchingPassword=await bcrypt.compare(password,myuser.password)

    if(!matchingPassword){
        return res.send(' password not match')
    }

     req.session.user={
        name:myuser.name,
        id:myuser._id
     } 

     res.send('logged in succesfully')

  
});

router.get('/login',(req,res)=>{
   
    res.render('login')
});

router.get('/signup',(req,res)=>{
    res.render('signup',)
});
router.post('/sighnup',(req,res)=>{

    
    const createBlog=new blogModel({
        email:req.body.email,
        password:req.body.password,
        signup:req.body.password,
 });

});

module.exports=router