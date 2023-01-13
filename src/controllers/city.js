const http = require('../helpers/http')
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants')
const CityService = require('../services/city')

const CityController = module.exports

CityController.findAll = async (req, res) => {
  try {
    const city = await new CityService().findAll()
    return res.status(OK).json(http.response(city, OK, 'City found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'City not found'))
  }
}
CityController.findOne = async (req, res) => {
  try {
    const city = await new CityService().findByPk(req.params.cityId)
    return res.status(OK).json(http.response(city, OK, 'City found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'City not found'))
  }
}
CityController.create = async (req, res) => {
  try {
    const city = await new CityService().create(req.body)
    return res.status(OK).json(http.response(city, OK, 'City created'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'City not created'))
  }
}
CityController.update = async (req, res) => {
  try {
    const city = await new CityService().update(req.params.cityId, req.body)
    return res.status(OK).json(http.response(city, OK, 'City updated'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'City not updated'))
  }
}
CityController.remove = async (req, res) => {
  try {
    const city = await new CityService().remove(req.params.cityId)
    return res.status(NO_CONTENT).json(http.response(city, OK, 'City deleted'))
  } catch (error) {
    console.error(error)
    return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'City not deleted'))
  }
}
