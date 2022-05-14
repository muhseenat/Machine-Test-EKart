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

router.post('/update/product/:id', (req, res) => {
  let reqimge1 
  let reqimge2
  let reqimge3
  let reqimge4
  if(req.files){
   reqimge1 = req.files.image1
   reqimge2 = req.files.image2
   reqimge3 = req.files.image3
   reqimge4 = req.files.image4
  }
  const {id}=req.params
  productHelper.updateProduct(id,req.body).then((result)=>{
    if(reqimge1){
      let image1 = `./public/image/${id}-1.jpg`
      reqimge1.mv(image1)
    }
    if(reqimge2){
      let image2 = `./public/image/${id}-2.jpg`
      reqimge2.mv(image2)
    }
    if(reqimge3){
      let image3 = `./public/image/${id}-3.jpg`
      reqimge3.mv(image3)
     
    }
    if(reqimge4){
      let image4 = `./public/image/${id}-4.jpg`
      reqimge4.mv(image4)
    }
    res.redirect("/admin")
  }).catch((err)=>{
    res.send(err)
  })
})

//DELETE PRODUCT
router.delete('/delete/product/:id', (req, res) => {
  const {id}= req.params
  productHelper.deleteProduct(id).then(()=>{
    res.json(true)
  }).catch((err)=>{
    console.log(err)
  })
})

module.exports = router;
