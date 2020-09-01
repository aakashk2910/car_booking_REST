// Import car model
Car = require('../models/carModel');
// Handle index actions
exports.index = function (req, res) {
    Car.get(function (err, cars) {
       if (err) {
           res.json({
               status: "error",
               message: err,
           });
       }
       res.json({
           status: "success",
           message: "Cars retrieved successfully",
           data: cars
       });
    });
};
// Handle create car actions
exports.new = function (req, res) {
    var car = new Car();
    car.model_name = req.body.model_name ? req.body.model_name : car.model_name;
    car.engine = req.body.engine;
    car.infotainment_system = req.body.infotainment_system;
    car.interior_design = req.body.interior_design;
    car.booking_status = req.body.booking_status;
    // save the user and check for errors
    car.save(function (err) {
       if (err)
           res.json(err);
       res.json({
           message: 'New Car added!',
           data: car
       });
    });
};
// Handle view car info
exports.view = function (req, res) {
    Car.findById(req.params.car_id, function (err, car) {
       if (err)
           res.send(err);
       res.json({
           message: '1 car found!',
           data: car
       });
    });
};
// Handle update car info
exports.update = function (req, res) {
    Car.findById(req.params.car_id, function (err, car) {
       if (err)
           res.send(err);
       car.model_name = req.body.model_name ? req.body.model_name : car.model_name;
       car.engine = req.body.engine;
       car.infotainment_system = req.body.infotainment_system;           
       car.interior_design = req.body.interior_design;
       car.booking_status = req.body.booking_status;
       // save the car and check for errors
       car.save(function (err) {
          if (err)
              res.json(err);
          res.json({
              message: 'Car Info updated',
              data: car
          });
       });
    });
};
// Handle delete car
exports.delete = function (req, res) {
    Car.deleteOne({
       _id: req.params.car_id
    }, function (err, car) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'car deleted'
        });
    });
};