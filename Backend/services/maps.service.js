const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching coordinates');
    }
};

module.exports.getDistanceTime = async (origin, destination)=>{
    if(!origin || !destination){
        throw new Error('Origin and destination addresses are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        const data = response.data;
        if(data.status === 'OK'){
            if(data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No route found between the given addresses');
            }
            return data.rows[0].elements[0];
        } else{
            throw new Error('Unable to fetch distance and time');
        }

    }catch(error){
        console.error(error);
        throw new Error('Error fetching distance and time');
    }
}

module.exports.getAutoCompleteSuggestions = async(input)=> {
    if(!input){
        throw new Error('Input is required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&types=(regions)&language=en&key=${apiKey}`;
    try{
        const response = await axios.get(url);
        const data = response.data;
        if(data.status === 'OK'){
            return data.predictions;
        } else{
            throw new Error('Unable to fetch autocomplete suggestions');
        }
    } catch (error){
        console.error(error);
        throw new Error('Error fetching autocomplete suggestions');
    }
}
