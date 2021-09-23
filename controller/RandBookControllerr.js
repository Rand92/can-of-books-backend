"use strict";
const {booksmodel}=require("../models/RandBooks");

let bookController= (req,res)=>{
    booksmodel.find().then(data=>{
        res.json(data);
    })  
    
}
let getbooks= (req,res)=>{
    let bookid = req.query.id
    booksmodel.findOne({_id:bookid}).then(data=>{
        res.json(data);
    })  
    
}
//*called seed-data then allBooks in the thunder.
module.exports = {bookController , getbooks};