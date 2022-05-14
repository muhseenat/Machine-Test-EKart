const mongoose =require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price :{
        type:Number
    },
    discount:{
        type:Number
    },
    shippingCharge:{
        type:Number
    }

})

module.exports = mongoose.model('product',productSchema)