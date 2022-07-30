const { connected } = require('process');
const client = require('../database');
const BookService = require('../Service/book');


exports.getAllBook= async (req, res) => {
    try {
        const books = await BookService.getAllBook;
        return books;
    } catch (error) {
        console.log(error);
    }
}

// const orderid = (req,res)=>{
//     res.send("Getting id");
// };

//const getStudents = (req,res)=>{
  //  res.send("getting students");
//};


exports.createBook =async (req,res)=>{
    // const {customerId} = req.query;
    // const body = req.body;
    const bookPost=await BookService.createBook();
    console.log(bookPost);
    res.send(bookPost);
    // return BookService.createBook();
}
exports.deleteBook=async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    const bookDelete=await BookService.deleteBook(id);
    console.log(bookDelete);
    res.json(bookDelete);
}
exports.editBook=async(req,res)=>{
  const bookedit=await BookService.editBook();
  console.log(bookedit);
  res.send(bookedit);
}
exports.catogeryBook=async(req,res)=>{
  const bookcatogory=await BookService.catogeryBook();
  console.log(bookcatogory);
  res.send(bookcatogory);
}