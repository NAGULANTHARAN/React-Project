//import mongoose
const mongoose =require('mongoose');

// connect  to mongoDB
// CONNECTDB - ASYNCRONOUS ARROW FUNCTION
// Mongoose is used to connect to MongoDB
// async uses await -> it will wait for promises to resolve
//like the database connection

// mpngoose.connect() -> attempts establish a connection Using
// the connection string provided in the environment variable MONGO_URI

//process.env.MONGO_URI -> retrieves the MongoDB connection string from environment variables

//await -> waits for the connection to be established 
//useNewUrlParser and useUnifiedTopology -> options to avoid deprecation warnings

const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGO_URI);
console. log( 'MongoDB connected successfully');
} catch (error) {
console.error ('MongoDB connection failed:', error.message);
process.exit(1); // Exit process with failure

}
};
//export the connectDB function
// this allows other files to import and use this function
module.exports = connectDB;


//Why mongoose?
// Mongoose is an ODM (Object Data Modeling)
// library for MongoDB and Node.js.
// It provides a schema-based solution to model your application
// It helps in defining schemas, validating data,
// and provides a powerful query language.