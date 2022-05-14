const mongoose = require('mongoose');
module.exports={
   dbConnect(dburl){
    mongoose.connect(dburl, {useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
       console.log('database connected successfully');
    }).catch((err)=>{
       console.log(err)
    });
    }
   }