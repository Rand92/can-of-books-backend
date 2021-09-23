'use strict'
const { request, response } = require('express')
const mongoose = require('mongoose')



const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String,
})

const booksmodel = mongoose.model('book', bookSchema)

const createBook=  (request,response)=>{
    let newone=request.body;
    let newBook = new booksmodel(newone);
   
         newBook.save();
      
        response.json(newBook)
    
}
const deleteBook = async(request,response)=>{
    let deletedBook=request.params.id
    try {
        booksmodel.deleteOne({_id:deletedBook},(error , deleted)=>{
            response.send('one book deleted')
        })} catch (error) {response.status(200).send(error)}
}
const updateBook = async (request, response) => {

    const { title, description, email, status } = request.body;
    const Id = request.params.id;
    await booksmodel.findByIdAndUpdate(Id,
        { title, description, email, status },
        { new: true }, () => {
            (req, res) => {
                booksmodel.find().then(data => {
                    res.json(data);
                })
            };

            response.json('library updated')
        });
    }
let seedbook = () => {
    let newbook1 = new booksmodel({

        title: 'The Seven Rules Of Success ',
        description: `Drawing on the winning drive by which successful 
        individuals live their lives, Fiona Harrold has captured the seven essential rules that form 
        the blueprint for life achievement.`,
        status: '  22 ratings  , 88 reviews',
        email: 'ee@yahoo.com'
    });
    newbook1.save();

    let newbook2 = new booksmodel({
        title: 'The Forty Rules of Love ',
        description: (`The Forty Rules of Love is a novel written by Turkish author Elif Shafak, The book was published in March 2009. It is about Maulana Jalal-Ud-Din
        , known as Rumi and his companion Shams Tabrizi. `),
        status: '  874 ratings ',
        email: ' fd@yahoo.com'
    })
        ; newbook2.save();

    let newbook3 = new booksmodel({
        title: 'Dream Big ',
        description: (`Find and reach your biggest dreams. Bob Goff, the New York Times bestselling author of Love Does and Everybody, Always,
             is on a mission to help you recapture the version of your lives you dreamed about`),
        status: '100.2 reviews',
        email: '55e@yahoo.com'
    });
    newbook3.save()
    return [newbook1 ,newbook2,newbook3];
}


module.exports ={ seedbook ,bookSchema, booksmodel , 
    createBook, deleteBook, updateBook}