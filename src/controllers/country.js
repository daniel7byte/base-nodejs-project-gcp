const CountryService = require('../services/country')

const CountryController = module.exports

CountryController.findAll = async (req, res) => {
  try {
    const countryService = new CountryService()
    return await countryService.findAll(res)
  } catch (error) {
    console.error(error)
  }
}
CountryController.findOne = async (req, res) => {
  try {
    const countryService = new CountryService()
    return await countryService.findByPk(res, req.params.countryId)
  } catch (error) {
    console.error(error)
  }
}
CountryController.create = async (req, res) => {
  try {
    const countryService = new CountryService()
    return await countryService.create(res, req.body)
  } catch (error) {
    console.error(error)
  }
}
CountryController.update = async (req, res) => {
  try {
    const countryService = new CountryService()
    return await countryService.update(res, req.params.countryId, req.body)
  } catch (error) {
    console.error(error)
  }
}
CountryController.remove = async (req, res) => {
  try {
    const countryService = new CountryService()
    return await countryService.remove(res, req.params.countryId)
  } catch (error) {
    console.error(error)
  }
}
