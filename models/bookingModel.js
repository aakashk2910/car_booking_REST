var mongoose = require('mongoose');
// Setup schema
var bookingSchema = mongoose.Schema({
    car_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    pickup_location: {
        type: String,
        required: true
    },
    drop_location: {
        type: String,
        required: true
    },
    pickup_time: {
        type: String,
        required: true
    },
    drop_time: {
        type: String,
        required: true
    },
    car_features: {
        type: String,
    },
    booking_status: {
        type: Boolean
    }

});
// Export booking model
var booking = module.exports = mongoose.model('booking', bookingSchema);
module.exports.get = function (callback, limit) {
    Booking.find(callback).limit(limit);
}