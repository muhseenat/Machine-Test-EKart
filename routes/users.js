var express = require('express');
var router = express.Router();
const productHelper = require("../helper/product")
/* GET users listing. */
router.get('/', function(req, res, next) {
    productHelper.getAllProduct().then((products)=>{
      res.render("user/index",{products})
    })
});

module.exports = router;
