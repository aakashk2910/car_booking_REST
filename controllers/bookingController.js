// Import booking model
Booking = require('../models/bookingModel');
// Handle index actions
exports.index = function (req, res) {
    Booking.get(function (err, bookings) {
       if (err) {
           res.json({
               status: "error",
               message: err,
           });
       }
       res.json({
           status: "success",
           message: "Booking retrieved successfully",
           data: bookings
       });
    });
};
// Handle create car actions
exports.new = function (req, res) {
    var car = new Booking();
    booking.model_name = req.body.car_id
    booking.engine = req.body.user_id;
    booking.pickup_location = req.body.pickup_location;
    booking.drop_location = req.body.drop_location;
    booking.pickup_time = req.body.pickup_time;
    booking.drop_time = req.body.drop_time;
    booking.car_features = req.body.car_features;
    // save the booking and check for errors
    booking.save(function (err) {
       if (err)
           res.json(err);
       res.json({
           message: 'New Booking added!',
           data: booking
       });
    });
};
// Handle view booking info
exports.view = function (req, res) {
    Booking.findById(req.params.booking_id, function (err, booking) {
       if (err)
           res.send(err);
       res.json({
           message: 'Booking found!',
           data: booking
       });
    });
};
// Handle update car info
exports.update = function (req, res) {
    Booking.findById(req.params.booking_id, function (err, booking) {
       if (err)
           res.send(err);
        booking.model_name = req.body.car_id
        booking.engine = req.body.user_id;
        booking.pickup_location = req.body.pickup_location;
        booking.drop_location = req.body.drop_location;
        booking.pickup_time = req.body.pickup_time;
        booking.drop_time = req.body.drop_time;
        booking.car_features = req.body.car_features;
        booking.status = req.body.status;
       // save the booking and check for errors
       car.save(function (err) {
          if (err)
              res.json(err);
          res.json({
              message: 'Booking Info updated',
              data: booking
          });
       });
    });
};
// Handle delete car
exports.delete = function (req, res) {
    Booking.deleteOne({
       _id: req.params.booking_id
    }, function (err, booking) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Booking deleted'
        });
    });
};