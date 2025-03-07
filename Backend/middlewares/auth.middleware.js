const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; //frontend give the authorization header in api's.
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token and extract data
    if (!decoded || !decoded._id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res
        .status(401)
        .json({ message: "Unauthorized, token is blacklisted" });
    }

    // Fetch the user associated with the token
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};


module.exports.authCaptain = async (req,res,next)=>{
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; //frontend give the authorization header in api's.
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token and extract data
    if (!decoded || !decoded._id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Check if the token is blacklisted
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res
        .status(401)
        .json({ message: "Unauthorized, token is blacklisted" });
    }

    // Fetch the captain associated with the token
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ message: "Captain not found" });
    }

    req.captain = captain;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }

}
