const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");
const router = require("./routes/book-routes");
const router1 = require("./routes/auth-routes");
const cookieParser = require("cookie-parser");
require('dotenv').config();
const app=express();
const port=3000;
app.use(express.json());
app.use(cors());
app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookieParser());

app.use("/books", router);
app.use("/api", router1);
mongoose.connect(`mongodb+srv://chaluvadirashmika:${process.env.MONGODB_PASSWORORD}@cluster0.vwnqfdp.mongodb.net/bookSearch?retryWrites=true&w=majority`)
    .then(()=>{
        console.log("Mongodb connected successfully")
    })
    .catch((error)=>{
        console.log(error)
    })

app.get("/",(req,res)=>{
    res.send("route message")
})


app.listen(port,()=>console.log("server is running",port))