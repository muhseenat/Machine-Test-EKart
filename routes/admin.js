var express = require('express');
var router = express.Router();

const productHelper = require("../helper/product")
//GET HOME PAGE
router.get('/', function (req, res, next) {
  productHelper.getAllProduct().then((result)=>{
    res.render('admin/index',{products:result})
  })
});

//GET ADD PRODUCT PAGE
router.get('/add/product', (req, res) => {
  res.render('admin/addProduct')
})
//ADD PRODUCT ROUTE
router.post('/create/product', (req, res) => {
   let reqimge1 = req.files.image1
   let reqimge2 = req.files.image2
   let reqimge3 = req.files.image3
   let reqimge4 = req.files.image4
  productHelper.createProduct(req.body).then((result)=>{
    let image1 = `./public/image/${result._id}-1.jpg`
    let image2 = `./public/image/${result._id}-2.jpg`
    let image3 = `./public/image/${result._id}-3.jpg`
    let image4 = `./public/image/${result._id}-4.jpg`
    reqimge1.mv(image1)
    reqimge2.mv(image2)
    reqimge3.mv(image3)
    reqimge4.mv(image4)
    res.redirect("/admin")
  })
})

//UPDATE PRODUCT DETAILS
router.get('/edit/product/:id', (req, res) => {
  productHelper.getSingleProduct(req.params.id).then((product)=>{

    res.render('admin/editProduct',{product})
  }).catch((err)=>{
    res.send(err)
  })
})

//DELETE PRODUCT
router.delete('/delete/product/:id', (req, res) => {
  res.render('admin/index')
})

module.exports = router;
