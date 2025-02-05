const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]; //frontend give the authorization header in api's.
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);// the data that we stored in the token will be assigned to the decoded variable(in this case it is _id)
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();

    } catch(err) {
        return res.status(401).json({message: 'Unauthorized'});
    }
}