
// truyền vào 1 schema, theo thứ tự req, res, next
const validateDTO = (schema) => (req, res, next) => { 
    // validate là 1 constant của schema để bắt hợp lệ
    const { error } = schema.validate(req.body)
    if (error) throw new Error(error.details[0].message)
    next()
}

module.exports = validateDTO