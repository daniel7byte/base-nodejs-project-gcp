const http = require('../helpers/http')
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants')
const StateService = require('../services/state')

const StateController = module.exports

StateController.findAll = async (req, res) => {
  try {
    const state = await new StateService().findAll()
    return res.status(OK).json(http.response(state, OK, 'State found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'State not found'))
  }
}
StateController.findOne = async (req, res) => {
  try {
    const state = await new StateService().findByPk(req.params.stateId)
    return res.status(OK).json(http.response(state, OK, 'State found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'State not found'))
  }
}
StateController.create = async (req, res) => {
  try {
    const state = await new StateService().create(req.body)
    return res.status(OK).json(http.response(state, OK, 'State created'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'State not created'))
  }
}
StateController.update = async (req, res) => {
  try {
    const state = await new StateService().update(req.params.stateId, req.body)
    return res.status(OK).json(http.response(state, OK, 'State updated'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'State not updated'))
  }
}
StateController.remove = async (req, res) => {
  try {
    const state = await new StateService().remove(req.params.stateId)
    return res.status(NO_CONTENT).json(http.response(state, OK, 'State deleted'))
  } catch (error) {
    console.error(error)
    return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'State not deleted'))
  }
}
