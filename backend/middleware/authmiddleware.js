//Import jwt
//Middleware to authenticate user requests(to protect routes)
// This middleware checks if the request has a valid JWT token 
// in the Authorization header.

const jwt = require("jsonwebtoken");

const private=(req,res,next)=>{
    const token= req.headers.authorization?.split(" ")[1];
    if(!token){
        return res
        .status(401)
        .json({message:"No token provided,authorization denied"});
    }
    try{
        const decoed=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(error){
        return res.status(401).json({message:"Token is not valid"});
    }
};

module.exports={private};
