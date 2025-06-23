// Importing necessary modules
//Express-http server framework
//sending request form a client
//receiving response from a server

const express =require('express');

const { registerUser, login } = require('../controllers/authControllers');

// Create a new router instance
const router = express.Router();

router.post("/register", registerUser); 
router.post("/login",login);

//export the router
module.exports=router;
