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

Mongoose.Promise = global.Promise

/* Mongoose.connect(uri) */
module.exports = Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});