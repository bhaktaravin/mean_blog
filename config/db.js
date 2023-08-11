const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 

const url = 'mongodb+srv://userOne:JUECc9PuA8RE5X69@cluster0.bff6seb.mongodb.net/blog'; 

const connectToMongo = async() => {
    try {
        mongoose.set('strictQuery', false); 
        mongoose.connect(url); 
        console.log("MongoDB connected");
    }catch(error){
        console.log(error);
        
    }
}


module.exports = connectToMongo;
