const mongoose=require("mongoose");

mongoose.connect(`${process.env.MONGODB_URI}/mysettings`)
.then(function(){
    console.log("connected to db")
}).catch(function(err){
    console.log(err);
})

const db= mongoose.connection

module.exports=db;