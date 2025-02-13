const { errHandler, badRequest } = require("../middlewares/errorHandler")
const auth = require("./auth")

const initRoutes = (app) => { 
    app.use("/api/auth", auth)

    app.use(badRequest)
    
    /* `app.use(errHandler)` is adding the `errHandler` middleware function to the Express application.
    This middleware function will be executed for every request that the application receives,
    allowing it to handle any errors that occur during the request processing pipeline. */
    app.use(errHandler)
}

module.exports = initRoutes
