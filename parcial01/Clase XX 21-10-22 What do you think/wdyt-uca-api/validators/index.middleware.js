const { validationResult } = require("express-validator")

module.exports = (req, res, next) => {
    // Validar los parametros
    const errors = validationResult(req);

    // Verificamos si hay error
    if(!errors.isEmpty()) {
        //retorno 400

        return res.status(400)
            .json({
                errors: errors.array().map(error => ({
                    field: error.param,
                    message: error.msg
                }))
            })
    }

    // Pasa al sig middleware
    next();
}