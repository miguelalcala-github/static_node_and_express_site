const http = require('http');

const createErrorHelper = (status, message) => {
    const error = new Error('err');
    error.status = status;
    error.message = message;
    return error;
};

// handling non-existent routes
const handleNotFound = ((req, res, next) => { 
    // Create new error to handle non-existent routes
    const err = new Error('err');
    err.status = 404;
    err.message = 'Oops, the page that you are looking for does not exist';
  
    // Pass error to error handler
    next(err);
  });

// Handling global errors
const handleError = ((err, req, res, next) => {
    // Only providing error in development
    const error = req.app.get('env') === 'development' ? err : {};
    // Set error status and send error message to the page 
    const message = err.message;
    res.status(err.status || 500);
    // Getting meaning of status code error
    const httpStatusCode = http.STATUS_CODES[res.statusCode];
    console.error(res.statusCode === 404 ? "Pointed at a URL that doesn't exist as a route in the app" : `${httpStatusCode}`);

    res.render('error', {error, message, httpStatusCode});
});

module.exports = {createErrorHelper, handleNotFound, handleError};