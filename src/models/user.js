const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = mongoose.Schema({
    firstName : {type: String, maxLength : 25},
    lastName : {type: String, maxLength : 25},
    emailID : {
        type: String, 
        unique : true, 
        required : [true, 'Why no email?'], 
        trim : true,
        validate(value){
          if(!validator.isEmail(value)){
            throw new Error("Email ID is not valid")
          }  
        }
    },
    password : {type: String},
    age : {type: Number},
    gender : {type: String}
});

const User = mongoose.model("User", userSchema)

module.exports = User;