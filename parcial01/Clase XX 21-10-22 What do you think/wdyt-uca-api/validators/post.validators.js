const { body, param } = require("express-validator");
const validators = {};

validators.createPostValidator = [
    body("title")
        .notEmpty().withMessage("El titulo no debe ser vacío"),
    body("description")
        .notEmpty().withMessage("La descripción no debe ser vacía")
        .isLength({ max: 280 }).withMessage("La descripción no debe superar los 240 carácteres"),
    body("image")
        .optional()
        .notEmpty().withMessage("Debes enviar una imagen")
        .isURL().withMessage("La imágen debe ser un URL")
];

validators.findPostByIdValidator = [
    param("identifier")
        .notEmpty().withMessage("El id no debe ir vacío")
        .isMongoId().withMessage("El id debe ser de mongo")
];

module.exports = validators;