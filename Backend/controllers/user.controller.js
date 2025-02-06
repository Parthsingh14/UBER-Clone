const userModel = require('../models/user.model');
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model')
module.exports.registerUser = async (req,res,next)=>{ 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { fullname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({user, token});
}

module.exports.loginUser = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message: 'User not found'});
    } 
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid credentials'});
    }

    const token = user.generateAuthToken();
    res.cookie('token', token); //storing the token in form of cookie in user browser
    res.status(200).json({message: "User Logged In",token , user});
}

module.exports.getUserProfile = async (req,res,next)=>{
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]; // Get token first
    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }

    await blacklistTokenModel.create({ token }); // Blacklist the token
    res.clearCookie('token'); // Clear the cookie

    res.status(200).json({ message: 'User logged out successfully' });
};