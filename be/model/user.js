const  mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true, 
  }
})

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

UserSchema.methods.matchPassword = async function(enteredPassword){
    console.log(enteredPassword)
    console.log(this.password)
    return await bcrypt.compare(enteredPassword, this.password)
};
module.exports = mongoose.model('User',UserSchema)