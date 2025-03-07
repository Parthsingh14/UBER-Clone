const express = require('express');
const router = express.Router();
const {body,query} = require('express-validator');
const rideController = require('../controllers/ride.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage("Invalid Pickup Location"),
    body('destination').isString().isLength({min:3}).withMessage("Invalid Destination Location"),
    body('vehicleType').isString().isIn(['auto','car','bike']).withMessage("Invalid Vehicle Type"),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().withMessage("Invalid Pickup Location"),
    query('destination').isString().withMessage("Invalid Destination Location"),
    rideController.getFare
)


module.exports = router;