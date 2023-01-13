
const { UNAUTHORIZED } = require('../helpers/constants')
const http = require('../helpers/http')
const tokenize = require('../helpers/tokenize')
const UserService = require('../services/user')

const AuthHelper = module.exports

// this middleware is used to check if the user is authenticated and valid role
AuthHelper.checkAuth = (roles) => {
  return async (req, res, next) => {
    try {
      const token = req?.headers?.authorization.split(' ')[1]
      const data = tokenize.verify(token)

      if (!data) {
        return res.status(UNAUTHORIZED).json(http.response(null, UNAUTHORIZED, 'Unauthorized'))
      }

      const user = await new UserService().findByPk(data?.sub?.id)

      if (roles && !roles.includes(user?.role?.toUpperCase())) {
        return res.status(UNAUTHORIZED).json(http.response(null, UNAUTHORIZED, 'Unauthorized'))
      }

      req.user = user.dataValues
      return next()
    } catch (error) {
      console.log(error)
      return res.status(UNAUTHORIZED).json(http.response(null, UNAUTHORIZED, 'Unauthorized'))
    }
  }
}
