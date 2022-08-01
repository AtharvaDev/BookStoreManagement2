const express = require('express');
const client = require('../database');
const repo = require('../repository/customer');
exports.createCustomer = async(req,res)=>{
    const customerid=await repo.createCustomer();
    // return repo.createBook();
    return customerid;
}

exports.getAllCustomer= async () =>{
    const customer = await repo.getAllCustomer();
    
    return customer;
}
exports.deleteCustomer=async(req,res)=> {
    const customerdel=await repo.deleteCustomer();
    //console.log('bookdel');
    return customerdel;

}
exports.editCustomer=async(req,res)=> {
    const customerupdate=await repo.editCustomer();
   // console.log('bookupdate');
    return customerupdate;

}
