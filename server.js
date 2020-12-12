//importar o express e body-parser
const express= require('express')
const bodyParser= require('body-parser')


//inicializar o express
const app= express()    

app.set('view engine','ejs')
app.use(express.static('public'))

//configurar o bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


 //rotas
 app.get("/", (req,res)=>{
     res.send("VAI ETIM!!")
 })
 
//escutar a porta
app.listen(3000) 