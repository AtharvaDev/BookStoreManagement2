const express = require('express');
const client = require('../database');
exports.createBook= async(req,res)=>{
    const q=`INSERT INTO public.book(
        bookid, title, author, category, description, isbn, price, "publishDate", "lastUpdatedOn")
        VALUES (999,'sun','asif','Novel','Something about sun','isbn-97979-1320',134.90,'2017-09-08 00:00:00','2021-02-12 00:00:00')returning *;`
    // const q =`INSERT INTO book VALUES(6,"Moon","alok","Novel","Something about moon","isbn-97979-1320",134.90,"2017-09-08 00:00:00","2021-02-12 00:00:00")`;
    console.log(q);
    const result = await client.query(q);
    console.log('result');
    return  result.rows;
    
}


exports.getAllBook= async() => {
    const q = `Select * from book`;
    const result = await client.query(q);
    if(result){
        return result.rows;
    }

}
exports.deleteBook=async(req,res)=>{
    const d=`DELETE FROM public.book
	WHERE bookid=108 returning *;`
    console.log(d);
    const resultDelete = await client.query(d);
    console.log(resultDelete);
    return  resultDelete.rows;
}
exports.editBook=async(req,res)=>{
    const e=`UPDATE public.book
	SET bookid=2000, title='journey with neebal'
	WHERE bookid=3 returning *;`
    console.log(e);
    const resultedit = await client.query(e);
    console.log(resultedit);
    return  resultedit.rows;
}
exports.catogeryBook=async(req,res)=>{
    const c=`SELECT * FROM  public.book
	WHERE category='Biography' ;`
    console.log(c);
    const resultset = await client.query(c);
    console.log(resultset);
    return  resultset.rows;
}