const Joi = require('joi')

exports.string = Joi.string().allow(null, '')
exports.stringReq = Joi.string().required()
exports.number = Joi.string().allow(null, '')
exports.numberReq = Joi.string().required()
exports.array = Joi.string().allow(null, '')
exports.arrayReq = Joi.string().required()