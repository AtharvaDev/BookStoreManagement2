const express = require('express');
const customerRoutes = require('./routes/customer');
const app = express();
const port = 4000;

app.use(express.json()); // middlewear

app.get("/",(req,res)=>{
    res.send("Hello Asif");
});
 app.use("/customer",customerRoutes);

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});