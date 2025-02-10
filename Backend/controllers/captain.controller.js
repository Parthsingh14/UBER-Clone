const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const captainServices = require("../services/captain.service");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;


  const captainExists = await captainModel.findOne({ email });
  if (captainExists) {
    return res.status(400).json({ message: "Captain already exists" });
  }


  const hashedPassword = await captainModel.hashPassword(password);


  const captain = await captainServices.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ captain, token });
};
