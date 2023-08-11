const express = require('express'); 
const bodyParser = require('body-parser'); 
const router = new express.Router(); 

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: false})); 


router.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH,PUT, DELETE, OPTIONS"
    );
    next();
});


module.exports = router;