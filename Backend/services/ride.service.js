const rideModel = require('../models/ride.model');
const mapServices = require('../services/maps.service')
const crypto = require('crypto');

async function getFare(pickup,destination){

    if(!pickup || !destination){
        return {error: 'Invalid pickup or destination'};
    }

    let distanceTime = await mapServices.getDistanceTime(pickup,destination);

    const baseFare = {
        auto: 30,
        car: 50,
        bike: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        bike: 5
    };

    const perMinuteRate = {
        auto: 1,
        car: 1.5,
        bike: 0.5
    }

    const fare = {
        auto: baseFare.auto + ((distanceTime.distance.value/1000) * perKmRate.auto) + ((distanceTime.duration.value/60) * perMinuteRate.auto),
        car: baseFare.car + ((distanceTime.distance.value/1000) * perKmRate.car) + ((distanceTime.duration.value/60) * perMinuteRate.car),
        bike: baseFare.bike + ((distanceTime.distance.value/1000) * perKmRate.bike) + ((distanceTime.duration.value/60) * perMinuteRate.bike) 
    }

    return fare;


}
module.exports.getFare = getFare;


function getOtp(num){
    const otp = crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString();
    return otp;
}

module.exports.createRide = async ({user,pickup,destination,vehicleType}) =>{
    if(!pickup||!destination||!vehicleType||!user){
        throw new Error('All Fields are required');
    }

    const fare = await getFare(pickup,destination);
    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType]
    })

    return ride;
}

