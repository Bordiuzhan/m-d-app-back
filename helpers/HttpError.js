/*
    This file is a helper function that creates a new error object with a status code and message.
    It is used to create custom error messages for the server response.
*/
const errorMessageList = {
    400: 'Bad Request', 401: 'Not authorized', 403: 'Forbidden', 404: 'Not found', 409: 'Conflict',
};

const HttpError = (status, message = errorMessageList[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
};

module.exports = HttpError;