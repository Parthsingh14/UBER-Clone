const express = require('express');
const { body }=  require("express-validator");
const router = express.Router();
const captainController = require('../controllers/captain.controller');


router.post('/register',[
    body('email').isEmail().withMessage("invalid email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("First name must be at least 3 characters long"),
    body('password').isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
    body('vehicle.color').isLength({min: 3}).withMessage("Vehicle color must be at least 3 characters long"),
    body('vehicle.plate').isLength({min: 3}).withMessage("Vehicle color must be at least 3 characters long"),   
    body('vehicle.capacity').isLength({min: 1}).withMessage("Vehicle capacity must be at least 1 characters long"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Vehicle type must be car, motorcycle or auto"),
],captainController.registerCaptain);





module.exports = router;