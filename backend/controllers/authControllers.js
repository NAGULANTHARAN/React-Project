const User=require('../models/User');// Import the User model

//for hasing passwords
const bcrypt = require('bcryptjs');//password encrypt 

//for generating JWT tokens
const jwt = require('jsonwebtoken');//json web token

// Register a new user
exports.registerUser = async (req, res)  => {
    const { name, email, password, role } = req.body;

    try{
        //hash the password using bcrypt library
        //two arguement - password entered by user,salt value (10)-> how many times to hashing algorithm will run
        //more rounds -> more secure but slower
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,email,password:hashedPassword,role

    });

    res.status(201).json({
        message:"User registered successfully",
    })
}
catch(error){
    res.stauts(500).json({
        message:"Error registering user",
        error:error.message,
    });
}
};

exports.login= async (req, res) => {
    //get eamil and password from request 
    const { email, password } = req.body;
    //find user by email
    //it will search
    
    try{
        const user = await User.findOne ({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) {
        return res.status(401).json({
            message: "Invalid credentials",
        });
    }
    //generate JWT token
    //the jwt sing method is used to create a new token
    //it takes two arguments: payload and secret key
    const token =jwt.sign(
        { userId: user._id, role: user.role }, 
        process.env.JWT_SECRET
    );
    res.json({
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }

    });
} catch (error) {
        res.status(500).json({
            message: "Error logging in",
            error: error.message,
        });
    }
};

