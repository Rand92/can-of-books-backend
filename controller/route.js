'use strict'
const express=require('express');
const app=express();
const {booksmodel} =require('../models/RandBooks');

app.post('/add_user', async(request,response)=>{
    let user=new booksmodel(request.body);
try {
    await user.save();
    response.send(user);
}
catch(error){
response.status(200).send(error)};
console.log(user)
})
module.exports ={app}