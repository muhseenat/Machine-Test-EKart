const Product = require("../models/productSchema")

module.exports={
    createProduct:(data)=>{
        return new Promise((resolve,reject)=>{
            const newData = new Product({
                name:data.name,
                price:Number(data.price.trim()),
                discount:Number(data.discount),
                shippingCharge:Number(data.shippingCharge)
            })
            newData.save().then(result=>{
                resolve(result)
            })
        })
    },
    getSingleProduct:(id)=>{
        return new Promise((resolve,reject)=>{
            Product.findOne({_id:id}).then((result)=>{
                resolve(result)
            }).catch((err)=>{
                reject(err)
            })
        })
    },  
    getAllProduct:()=>{
        return new Promise((resolve,reject)=>{
            Product.find().then((result)=>{
                resolve(result)
            }).catch((err)=>{
                reject(err)
            })
        })
    },
    updateProduct:(id,data)=>{
        return new Promise((resolve,reject)=>{
            Product.updateOne({_id:id},{...data}).then((result)=>{
                resolve(result)
            }).catch((err)=>{
                console.log(err)
                reject(err)
            })
        })
    },
    deleteProduct:(id)=>{
        return new Promise ((resolve,reject)=>{
            Product.deleteOne({_id:id}).then((result)=>{
                console.log(result,"dffffffffffffffffffffffffff")
                resolve(result)
            }).catch(err=>reject(err))
        })
    }
}