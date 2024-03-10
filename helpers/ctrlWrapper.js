/* This is a helper function that wraps the controller functions to catch any errors that may occur. */

const ctrlWrapper = (ctrl) => {
    return async (req, res, next) => {
        try {
            await ctrl(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

module.exports = ctrlWrapper;
