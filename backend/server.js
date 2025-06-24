//Import express
const express = require("express");
//Import dotenv - to load environment variables
const dotenv = require('dotenv');
//cors - to enable CORS (Cross-Origin Resource Sharing)
const cors = require("cors");
//Import connectDB - to connect to MongoDB
const connectDB = require("./config/db");
dotenv.config(); // Load environment variables from .env file to process.env
connectDB(); // Connect to MongoDB

//create an express application
const app = express ();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

app.use("/api/auth", require('./routes/authRoutes'));


const PORT=process.env.PORT||5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
