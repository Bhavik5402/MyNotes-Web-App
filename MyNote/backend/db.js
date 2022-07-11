const mongoose = require("mongoose");
const connUri = "mongodb://localhost:27017/Book-Store";

const connToMongo = ()=>{
    mongoose.connect(connUri,()=>{
        console.log("Database Connected....")
    })
}

module.exports=connToMongo;