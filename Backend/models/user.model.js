const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [10, "First Name must be atleast 10 characters"],
        },
        lastname: {
            type: String,
            minlength: [10, "Last Name must be atleast 10 characters"],
        },
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this.id}, process.env.JWT_SECRET); //it makes sure that which data will be stored in the token.
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;