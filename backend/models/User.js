const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true}, //Required a name field of type String
    email:{ type : String, required: true, unique: true}, //Required an email field of type String, must be unique
    password: { type: String, required: true}, //Required a password field of type String
    role:{ 
        type:String,
        enum:['admin', 'developer','tester'], 
        default: 'tester'
    },
});
module.exports = mongoose.model("User", userSchema);
