const express= require("express");
const router=express.Router();
const {indexcontroller}=require("../controllers/index-controller");
const { mymiddleware } = require("../middlewares/mymiddleware");


router.get("/",mymiddleware,indexcontroller);

module.exports=router;