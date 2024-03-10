/*   This helper function is used to handle the error that is thrown by mongoose when the data is not valid. */
const handleMongooseError = (error, data, next) => {
    error.status = 400;
    next();
};

module.exports = handleMongooseError;
