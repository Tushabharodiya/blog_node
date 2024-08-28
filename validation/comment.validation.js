let Joi = require("joi");

let comment = {
    body: Joi.object().keys({
        user: Joi.string().required().trim(),
        blog: Joi.string().required().trim(),
        content: Joi.string().required().trim(),
    }),
};

module.exports = { comment };