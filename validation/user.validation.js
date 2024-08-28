let Joi = require("joi");

let user = {
    body: Joi.object().keys({
        username: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        sex: Joi.string().required().trim(),
        date: Joi.string().required().trim(),
        profile: Joi.string(),
    }),
};

module.exports = { user };