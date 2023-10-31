const express = require('express')
const app = express()

const path = require('path')
const database = require('./databaseconfig.js')

app.use(express.json())
app.use(express.static(path.resolve(__dirname,'public','images')))
app.use(express.static(path.resolve(__dirname,'public','css')))
app.use(express.static(path.resolve(__dirname,'public','javascripts')))
app.use(express.static(path.resolve(__dirname,'public','font')))
app.set('views',path.resolve(__dirname,'views'))
app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.render('login')
})
app.get('/studentdata',(req,res)=>{
    database.getStudentData().then((data)=>{
        res.json(data)
    })
})

app.post('/teacherdata',(req,res)=>{
    database.getTeacherData(req.body).then((data)=>{
        res.json(data)
        console.log(data)
    }).catch((err)=>{
        res.status(401)
    })
})
app.listen(3003,()=>{
    console.log("server is running")
})
