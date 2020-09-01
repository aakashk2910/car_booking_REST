var mongoose = require('mongoose');
// Setup schema
var carSchema = mongoose.Schema({
    model_name: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    infotainment_system: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    interior_design: {
        type: String,
        required: true
    },
    booking_status: {
        type: Boolean,
    }
});
// Export Car model
var Car = module.exports = mongoose.model('car', carSchema);
module.exports.get = function (callback, limit) {
    Car.find(callback).limit(limit);
}