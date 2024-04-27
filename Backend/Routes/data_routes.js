const express = require('express');
var data_routes=express.Router();
const gameModel=require('../Model/DataModel')

 data_routes.get("/getdata",async(req,res)=>{
    try{
        const gamedata=await gameModel.find();
        res.send(gamedata);
    }catch(err){
    
        res.send(err)
    }
})

module.exports=data_routes;

