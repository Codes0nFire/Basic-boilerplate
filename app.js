const express= require("express");
const app= express();
const morgan=require("morgan");
const path=require("path");
require("dotenv").config();
const db=require("./config/mongoose-connection");


const indexRouter=require("./routes/index-router");
const userRouter=require("./routes/user-router");


app.set("view engine", "ejs");
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.use("/",indexRouter)
app.use("/user",userRouter)


app.listen(process.env.PORT || 3000);