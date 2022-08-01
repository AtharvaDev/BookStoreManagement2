var express = require('express');
var router = express.Router();
const customercontroller = require('../controller/customer');

router.get('/view',customercontroller.getAllCustomer);
router.post('/create',customercontroller.createCustomer); //post
router.delete('/delete',customercontroller.deleteCustomer); //delete
router.put('/edit',customercontroller.editCustomer); //put

module.exports=router;