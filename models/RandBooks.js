'use strict'
const mongoose = require('mongoose')



const bookSchema = new mongoose.Schema({
Books:Array,
})

const booksmodel = mongoose.model('book',bookSchema)

let seedbook = () =>{
    let newBook =[{

        title: 'The Seven Rules Of Success ',
        description:(`Drawing on the winning drive by which successful 
        individuals live their lives, Fiona Harrold has captured the seven essential rules that form 
        the blueprint for life achievement.`),
           status:'  22 ratings  , 88 reviews',
           email : 'ee@yahoo.com',
           id:1
        
    },{
    title: 'The Forty Rules of Love ',
        description:(`The Forty Rules of Love is a novel written by Turkish author Elif Shafak, The book was published in March 2009. It is about Maulana Jalal-Ud-Din
        , known as Rumi and his companion Shams Tabrizi. `),
           status:'  874 ratings ',
           email : ' fd@yahoo.com',
           id:2

    },
    {
        title: 'Dream Big ',
            description:(`Find and reach your biggest dreams. Bob Goff, the New York Times bestselling author of Love Does and Everybody, Always,
             is on a mission to help you recapture the version of your lives you dreamed about`),
               status:'100.2 reviews',
               email : '55e@yahoo.com',
               id:3
        }
    ]
    
    let newbooks = new booksmodel({
        
Books:[{

    title: 'The Seven Rules Of Success ',
    description:(`Drawing on the winning drive by which successful 
    individuals live their lives, Fiona Harrold has captured the seven essential rules that form 
    the blueprint for life achievement.`),
       status:'  22 ratings  , 88 reviews',
       email : 'ee@yahoo.com',
       id:1
    
},{
title: 'The Forty Rules of Love ',
    description:(`The Forty Rules of Love is a novel written by Turkish author Elif Shafak, The book was published in March 2009. It is about Maulana Jalal-Ud-Din
    , known as Rumi and his companion Shams Tabrizi. `),
       status:'  874 ratings ',
       email : ' fd@yahoo.com',
       id:2

},
{
    title: 'Dream Big ',
        description:(`Find and reach your biggest dreams. Bob Goff, the New York Times bestselling author of Love Does and Everybody, Always,
         is on a mission to help you recapture the version of your lives you dreamed about`),
           status:'100.2 reviews',
           email : '55e@yahoo.com',
           id:3
    }
]
    })
    
    newbooks.save()
}
module.exports={
    seedbook,
    bookSchema,
    booksmodel
}