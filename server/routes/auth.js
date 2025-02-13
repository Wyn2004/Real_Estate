const router = require('express').Router()
const authController = require('../controllers/auth')
const Joi = require('joi')
const validateDTO = require('../middlewares/validation')
const { stringReq, numberReq } = require('../middlewares/joiSchema')

router.post(
    "/register",
    validateDTO(Joi.object({
        phone: numberReq,
        password: stringReq,
        name: stringReq
    })),
    authController.register
)

module.exports = router