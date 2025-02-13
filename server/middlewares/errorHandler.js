const errHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    return res.status(statusCode).json({
        success: false,
        mes: error.message
    })
}

const throwErrorWithStatus = (code, mess, res, next) => { 
    const error = new Error(message)
    res.status(code)
    next(error)
}

const badRequest = (req, res, next) => {
    const error = new Error(`Routes ${req.originalUrl} not found!`)
    res.status(404)
    next(error)
}

module.exports = {
    errHandler,
    throwErrorWithStatus,
    badRequest
}