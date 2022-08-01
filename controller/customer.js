const { connected } = require('process');
const client = require('../database');
const CustomerService = require('../service/customer');


exports.getAllCustomer= async (req, res) => {
    try {
        const customer = await CustomerService.getAllCustomer;
        res.send (customer);
    } catch (error) {
        console.log(error);
    }
    // res.send(customer);
}



exports.createCustomer =async (req,res)=>{
    const customerPost=await CustomerService.createCustomer();
    console.log(customerPost);
    res.send(customerPost);
}
exports.deleteCustomer=async(req,res)=>{
    const customerDelete=await CustomerService.deleteCustomer();
    // console.log(customerkDelete);
    res.send(customerDelete);
}
exports.editCustomer=async(req,res)=>{
  const customeredit=await CustomerService.editCustomer();
  console.log(customeredit);
  res.send(customeredit);
}
