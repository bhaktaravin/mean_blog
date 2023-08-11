const path = require('path'); 
const express = require('express'); 
const mongoose = require('mongoose'); 

const db = require('./config/db'); 

const header = require('./middlewares/header'); 

const postRouter = require('./routes/post'); 
const userRouter = require('./routes/user'); 
const profileRouter = require('./routes/profile'); 

const cors = require('cors'); 
const connectToMongo = require('./config/db');


const app = express(); 
app.use(cors({ origin: "*"})); 

const port = process.env.PORT || 3000; 

connectToMongo();

app.use(express.json()); 
app.use(header); 
 
app.use("/api/posts", postRouter); 
app.use("/api/user", userRouter); 
app.use("/api/profile", profileRouter); 


app.get('/test', (req, res) => {
    res.send('Testing...');
});


app.listen(port, (req,res) => {
    console.log(`Server is running on http://localhost:${port}`);
    
})