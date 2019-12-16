const Mongoose = require('mongoose')

module.exports = () => {
    var geoJsonModel = new Mongoose.Schema({ 
        geometry: {
            coordinates: {
                latitude: Number,
                longitude: Number,
            }
        },
        properties: {
            name: String,
            description: String
        }
    });
   
    return Mongoose.model('dados', geoJsonModel);
}