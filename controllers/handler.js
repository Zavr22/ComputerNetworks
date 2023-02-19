

import Books from "../models/books.js";


export const findBookByAuthor = (req, res, next) =>{
    console.log(req.body)
    const obj = JSON.parse(JSON.stringify(req.body));
    let a = obj.author
    Books.findOne({where: {
        author: a
        }}).then(book =>{
            if(book){
                return res.status(200).json(book)
            }
})}