const {Client}= require('pg');
const client = new Client({
    host : "localhost",
    user : "postgres",
    port : 5432,
    password : "Asif123@",
    database : "neebal"
});
client.connect();
client.query('Select * from customer',(err,res)=>{
    if(!err){
        console.log('Connectd');
        console.log(res.rows);
    }
    if(err){
        console.log(err.message);
    }
    client.end;
});
