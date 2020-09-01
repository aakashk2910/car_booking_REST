// Import express router
let Router = require('express').Router();
// Set default API response
Router.get('/', function (req, res){
    res.json({
        status: 'WORKING',
        message: 'This is the /api/ route!'
    });
});
// Import car controller
var carController = require('./controllers/carController');
// Car routes
Router.route('/cars')
    .get(carController.index)
    .post(carController.new);
Router.route('/car/:car_id')
    .get(carController.view)
    .patch(carController.update)
    .put(carController.update)
    .delete(carController.delete);

// Import user controller
var userController = require('./controllers/userController');
// users routes
Router.route('/users')
    .get(userController.index)
    .post(userController.new);
Router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Import booking controller
var bookingController = require('./controllers/bookingController');
// Booking routes
Router.route('/booking')
    .get(bookingController.index)
    .post(bookingController.new);
Router.route('/booking/:booking_id')
    .get(bookingController.view)
    .patch(bookingController.update)
    .put(bookingController.update)
    .delete(bookingController.delete);    
    
    
// Export API routes
module.exports = Router;