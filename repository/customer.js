const express = require('express');
const client = require('../database');
exports.createCustomer= async(req,res)=>{
    const q=`INSERT INTO public.customer(
        customerid,email,mobilenumber,fullname,password1,address,registeron)
        VALUES (316,'z@gmail.com',111,'Rajat Kapoor','985','PUnjab','2022-07-24 12:10:19')returning *;`
    console.log(q);
    const result = await client.query(q);
    console.log('result');
    return  result.rows;
    
}


exports.getAllCustomer= async() => {
    const q = `Select * from customer`;
    const result = await client.query(q);
    if(result){
        return result.rows;
    }

}
exports.deleteCustomer=async(req,res)=>{
    const d=`DELETE FROM public.customer
	WHERE customerid=2000 returning *;`
    console.log(d);
    const resultDelete = await client.query(d);
    console.log(resultDelete);
    return  resultDelete.rows;
}
exports.editCustomer=async(req,res)=>{
    const e=`UPDATE public.customer
	SET customerid=302
	WHERE customerid=300 returning *;`
    console.log(e);
    const resultedit = await client.query(e);
    console.log(resultedit);
    return  resultedit.rows;
}
