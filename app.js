// const  express=require('express');
// const feedRoutes=require('./routes/book');
// const bodyParser=require('body-parser');
// const app=express();

// html parse 
// app.use(bodyParser.urlencoded({ extended: false }));

// json parse
// app.use(bodyParser.json());
// app.use('/book',feedRoutes);

// app.listen(9090);





const express = require('express');
const bookRoutes = require('./routes/book');
const bodyParser=require('body-parser');
const app = express();
const port = 3000;

app.use(express.json()); // middlewear

app.get("/",(req,res)=>{
    res.send("Hello World");
});

 app.use("/book",bookRoutes);
 app.use(bodyParser.json());

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});