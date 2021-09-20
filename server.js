'use strict'
const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const mongoose = require('mongoose')
const PORT = process.env.PORT
const MONGO_SERVER = process.env.MONGO_SERVER
const {bookController,getbooks} =require("./controller/RandBookControllerr")


const {seedbook} = require("./models/RandBooks")
// const {seedAuthor} = require("./models/author.model")
// const {authorcontroller ,getauthorcontroller} = require("./contrellor/author.contrellor")


app.get('/seed_data',(req,res)=>{
    seedbook()
    res.json('Hello from seed data')
})


app.get("/", (req, res) => {
    res.status(200).json({ message: "I'm working" });
  });

mongoose.connect(`mongodb://localhost:27017/bookstore`,{useNewUrlParser: true, useUnifiedTopology: true});

app.get('/allBooks',bookController);
// app.get('/getbook',getbooks);


app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  