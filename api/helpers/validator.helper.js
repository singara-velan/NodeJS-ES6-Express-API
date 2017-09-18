import Joi from 'joi';

const validateRequest = (request, requestSchema, callback) => {
    const err = Joi.validate(request, requestSchema, {
        abortEarly: false,
        allowUnknown: true
    });

    if (err.error !== null && err.error.details !== null && err.error.details.length > 0) {
        const validationMessages = err.error.details.map(msg => msg.message);
        callback(null, validationMessages);
    } else {
        callback(null, null);
    }
};

export default {
    validateRequest
}