// Import user model
User = require('../models/userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
       if (err) {
           res.json({
               status: "error",
               message: err,
           });
       }
       res.json({
           status: "success",
           message: "Users retrieved successfully",
           data: users
       });
    });
};
// Handle create book actions
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.gender = req.body.gender;
    user.age = req.body.age;
    user.booking_status = req.body.booking_status;
    // save the user and check for errors
    user.save(function (err) {
       if (err)
           res.json(err);
       res.json({
           message: 'New User added!',
           data: user
       });
    });
};
// Handle view user info
exports.view = function (req, res) {
    User.findById(req.params.car_id, function (err, user) {
       if (err)
           res.send(err);
       res.json({
           message: '1 user found!',
           data: user
       });
    });
};
// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.car_id, function (err, user) {
        if (err)
           res.send(err);
       user.name = req.body.name ? req.body.name : user.name;
       user.gender = req.body.gender;
       user.age = req.body.age;
       user.booking_status = req.body.booking_status;
        // save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};
// Handle delete user
exports.delete = function (req, res) {
    //check status
    if(!user.booking_status) {
        User.deleteOne({
            _id: req.params.user_id
         }, function (err, user) {
             if (err)
                 res.send(err);
             res.json({
                 status: "success",
                 message: 'user deleted'
             });
         });
    } else {
        res.json({
            status: "failure",
            message: 'User has some bookings'
    });
    }
};