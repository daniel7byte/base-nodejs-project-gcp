const UserService = require('../services/user')
const AuthService = require('../services/auth')
const http = require('../helpers/http')
const { OK, UNAUTHORIZED, BAD_REQUEST } = require('../helpers/constants')

const AuthController = module.exports

AuthController.login = async (req, res) => {
  try {
    const auth = await new AuthService().login(req.body)
    return res.status(OK).json(http.response(auth, OK, 'Authentication success'))
  } catch (error) {
    console.error(error)
    return res.status(UNAUTHORIZED).json(http.response(error, UNAUTHORIZED, 'Email or password incorrect'))
  }
}

AuthController.register = async (req, res) => {
  try {
    const user = await new UserService().create(req.body)
    return res.status(OK).json(http.response(user, OK, 'User created'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'User not created'))
  }
}

// TODO: Refresh token method
