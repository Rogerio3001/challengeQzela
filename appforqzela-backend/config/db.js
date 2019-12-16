const uri = "mongodb+srv://Qzela:i0P4JanxxEmrFoHi@roger-bwzzi.mongodb.net/test?retryWrites=true&w=majority";
let Mongoose = require('mongoose');
var db = Mongoose.connection;

db.on('error', console.error);
db.on('connected', function() {
    if (db.client.s.url.startsWith('mongodb+srv')) {
        db.db = db.client.db('desafio_qzela');
    }
    console.log('Connection to MongoDB established.')
});

Mongoose.connect(uri)

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

let Coords = Mongoose.model('dados', geoJsonModel);
module.exports = Coords