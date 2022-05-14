var express = require('express');
var router = express.Router();

//GET HOME PAGE
router.get('/', function (req, res, next) {
  //get all products from db 
  // Pass that product to index page

  res.render('admin/index')
});

//GET ADD PRODUCT PAGE
router.get('/add/product', (req, res) => {
  res.render('admin/addProduct')
})
//ADD PRODUCT ROUTE
router.post('/add/product', (req, res) => {

  res.render('admin/index')
})

//UPDATE PRODUCT DETAILS
router.put('/edit/product/:id', (req, res) => {
  res.render('admin/editProduct')
})

//DELETE PRODUCT
router.delete('/delete/product/:id', (req, res) => {
  res.render('admin/index')
})

module.exports = router;
