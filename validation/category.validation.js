let Joi = require("joi");

let category = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        desc: Joi.string().required().trim()
    }),
};

module.exports = { category };