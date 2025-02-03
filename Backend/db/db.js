const mongoose = require('mongoose');


function connecttoDb() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch(err => console.error("Could not connect to DB", err));
}

module.exports = connecttoDb;