const express = require("express")
const app=express()
const cors=require('cors')
const router = express.Router();
require('dotenv').config()
const mongoose=require('mongoose')
const DB=process.env.MODGODB
mongoose.connect(DB,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log("no connection",err)
})

//
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use(cors({
    origin:["https://balajifrontend.onrender.com/"],
    methods:["POST","GET"],
    Credential:true
}))
// if (process.env.NODE_ENV==="production"){
//     app.use(express.static(path.join(__dirname,'/client/build')))
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,"client","build","index.html"))
//     })
// }
// else{
//     app.get("/",(req,res)=>{
//         res.send("hellow from node js server")
//     })
// }


const UenCard=require('./mongocom/menuItem')

app.use(express.json())
const userRoute=require('./routers/userRoute')
const itemsRoute=require("./routers/itemsRoute")
const orderRoute=require('./routers/orderRoute')
app.use('/api/items/',itemsRoute);
app.use('/api/users/',userRoute);
app.use('/api/orders/',orderRoute);
app.use('/api/items/',itemsRoute);
app.get('/',(req,res)=>{
    res.send("server working")
});
  
// app.get("/getmenus",async(req,res)=>{
//    try{
//     const restaurant =await UenCard.find({})
//     res.send(restaurant);
//    }
//    catch(error){
//     console.log(error)
//    }
// })

const port=process.env.PORT || PORT;

app.listen(port,()=>{
    console.log("connected successfully :",port)
})
