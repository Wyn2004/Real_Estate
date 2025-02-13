const db = require('../models')
const asyncHandler = require('express-async-handler')

const register = asyncHandler(async (req, res) => {
    // pass, phone, name, role = [user, agent]
    // client = urlencoded || formdata => req.body
    // client = params (?q=asd) => req.query
    // client api/user/:id => req.params
    console.log(req.body)
    const response = await db.User.findOrCreate({
        where: { phone },
        default: req.body
    })

    const { password, phone, name, role } = req.body
    return res.status(200).json({
        success: true,
        mes: 'API OKE',
    })
})

module.exports = {
    register
} 