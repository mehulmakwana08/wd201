const express = require('express')
const path =require('path')


const app =express()
const router = express.Router()


router.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/registration.html'));
})


router.get('/project',(req,res)=>{
    res.sendFile(path.join(__dirname,'/project.html'));
})

app.use('/',router)

app.listen(5000,()=>{})