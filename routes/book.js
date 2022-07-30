var express = require('express');
var router = express.Router();
const bookcontroller = require('../controllers/book');

//router.get('/',controller.getStudents);

// router.get('/view',controller.orderid);
router.post('/create',bookcontroller.createBook);
router.delete('/delete/:id',bookcontroller.deleteBook);
router.put('/edit',bookcontroller.editBook);
router.get('/catogery',bookcontroller.catogeryBook)

module.exports=router;