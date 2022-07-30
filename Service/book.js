const express = require('express');
const client = require('../database');
const repo = require('../repository/book');
exports.createBook = async(req,res)=>{
    const bookid=await repo.createBook();
    // return repo.createBook();
    console.log('bookid');
    return bookid;
}

exports.getAllBook= async () =>{
    const books = await repo.getAllBook();
    
    return books;
}
exports.deleteBook=async(id)=> {
    const bookdel=await repo.deleteBook(id);
    console.log('bookdel');
    return bookdel;

}
exports.editBook=async(req,res)=> {
    const bookupdate=await repo.editBook();
    console.log('bookupdate');
    return bookupdate;

}
exports.catogeryBook=async(req,res)=> {
    const bookcatogory=await repo.catogeryBook();
    console.log('bookcatogory');
    return bookcatogory;

}