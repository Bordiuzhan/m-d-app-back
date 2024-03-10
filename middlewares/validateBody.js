const {HttpError} = require("../helpers");

   /* This middleware function is used to validate the request body against a Joi schema. If the body does not match the schema, it will return a 400 error with the message from Joi. */
    const validateBody = (schema) => {
        return (req, res, next) => {
            const {error} = schema.validate(req.body);
            if (error) {
                next(HttpError(400, error.message));
            }
            next();
        };
    }

    module.exports = validateBody;