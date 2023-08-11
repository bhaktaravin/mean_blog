const mongoose = require('mongoose'); 

mongoose.Promise = global.Promise; 

const url = 'mongodb+srv://userOne:JUECc9PuA8RE5X69@cluster0.bff6seb.mongodb.net/blog'; 

let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});