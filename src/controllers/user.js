const http = require('../helpers/http')
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants')
const UserService = require('../services/user')

const UserController = module.exports

UserController.findAll = async (req, res) => {
  try {
    const user = await new UserService().findAll()
    return res.status(OK).json(http.response(user, OK, 'User found'))
    http.successResponse(res, OK, 'User found', user)
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'User not found'))
    http.errorResponse(res, OK, 'User found', user)
  }
}
UserController.findOne = async (req, res) => {
  try {
    const user = await new UserService().findByPk(req.params.userId)
    return res.status(OK).json(http.response(user, OK, 'User found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'User not found'))
  }
}
UserController.create = async (req, res) => {
  try {
    const user = await new UserService().create(req.body)
    return res.status(OK).json(http.response(user, OK, 'User created'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'User not created'))
  }
}
UserController.update = async (req, res) => {
  try {
    const user = await new UserService().update(req.params.userId, req.body)
    return res.status(OK).json(http.response(user, OK, 'User updated'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'User not updated'))
  }
}
UserController.remove = async (req, res) => {
  try {
    const user = await new UserService().remove(req.params.userId)
    return res.status(NO_CONTENT).json(http.response(user, OK, 'User deleted'))
  } catch (error) {
    console.error(error)
    return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'User not deleted'))
  }
}
