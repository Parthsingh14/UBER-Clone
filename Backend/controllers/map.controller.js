const mapService = require('../services/maps.service');
const {validationResult} = require('express-validator');

module.exports.getCoordinates = async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }



    const {address} = req.query;
    try{
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch(err){
        console.error(err);
        res.status(404).json({error: 'coordinate not found'});
    }
}


module.exports.getDistanceAndTime = async (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {origin,destination} = req.query;
    try{
        const distanceAndTime = await mapService.getDistanceTime(origin,destination);
        res.status(200).json(distanceAndTime);
    }catch(error){
        console.error(error);
        res.status(404).json({error: 'distance and time not found'});
    }
}


module.exports.getSuggestions = async(req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
        const suggestions = await mapService.getAutoCompleteSuggestions(req.query.input);
        res.status(200).json(suggestions);
    } catch(err){
        console.error(err);
        res.status(500).json({error: 'internal server error'});
    }
}