const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateProductInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (Validator.isLength(data.title, { max: 36 })) {
        errors.description = 'Max title length of 36 character';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}