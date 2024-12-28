import Book from "../model/book.model.js";

export const getBook=async(req,res)=>{
    try{
        const book=await Book.find();
        res.status(201).json(book);
    } catch (error){
        console.log("Error: ",error);
        res.status(400).json(error);
    }
}