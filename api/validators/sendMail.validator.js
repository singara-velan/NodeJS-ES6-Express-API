import Joi from 'joi';
import validateHelper from '../helpers/validator.helper';

const sendEmailSchema = {
    to: Joi.string().email().required(),
    subject: Joi.string().required(),
    message: Joi.string().required()
}

const validateSendEmail = (req, cb) => {
    validateHelper.validateRequest(req, sendEmailSchema, (err, data) => {
        cb(err, data);
    });
};

export default {
    validateSendEmail
}