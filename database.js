const {Client}= require('pg');
const client = new Client({
    host : "localhost",
    user : "postgres",
    port : 5432,
    password : "Neebal@123",
    database : "neebal"
});
client.connect();
module.exports= client
