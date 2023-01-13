const http = require('../helpers/http')
const {
  OK,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  NO_CONTENT,
  BAD_REQUEST
} = require('../helpers/constants')
const CountryService = require('../services/country')

const CountryController = module.exports

CountryController.findAll = async (req, res) => {
  try {
    const country = await new CountryService().findAll()
    return res.status(OK).json(http.response(country, OK, 'Country found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Country not found'))
  }
}
CountryController.findOne = async (req, res) => {
  try {
    const country = await new CountryService().findByPk(req.params.countryId)
    return res.status(OK).json(http.response(country, OK, 'Country found'))
  } catch (error) {
    console.error(error)
    return res.status(NOT_FOUND).json(http.response(error, NOT_FOUND, 'Country not found'))
  }
}
CountryController.create = async (req, res) => {
  try {
    const country = await new CountryService().create(req.body)
    return res.status(OK).json(http.response(country, OK, 'Country created'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Country not created'))
  }
}
CountryController.update = async (req, res) => {
  try {
    const country = await new CountryService().update(req.params.countryId, req.body)
    return res.status(OK).json(http.response(country, OK, 'Country updated'))
  } catch (error) {
    console.error(error)
    return res.status(BAD_REQUEST).json(http.response(error, BAD_REQUEST, 'Country not updated'))
  }
}
CountryController.remove = async (req, res) => {
  try {
    const country = await new CountryService().remove(req.params.countryId)
    return res.status(NO_CONTENT).json(http.response(country, OK, 'Country deleted'))
  } catch (error) {
    console.error(error)
    return res.status(INTERNAL_SERVER_ERROR).json(http.response(error, INTERNAL_SERVER_ERROR, 'Country not deleted'))
  }
}
