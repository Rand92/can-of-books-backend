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
const {seedbook,createBook,deleteBook,updateBook} = require("./models/RandBooks")
app.use(express.json())
const MONGO_URL =process.env.MONGO_URL;

app.get('/seed_data',(req,res)=>{
    res.json(seedbook())
})

// app.get("/", (req, res) => {
//     res.status(200).json({ message: "I'm working" });
//   });

mongoose.connect(`${MONGO_SERVER}/bookstore`,{useNewUrlParser: true, useUnifiedTopology: true});


app.get('/allBooks',bookController);
app.get('/getbook',getbooks);
app.post("/addBook",createBook);
app.delete('/delete-book/:id',deleteBook);
app.put('/update-book/:id',updateBook);

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
  