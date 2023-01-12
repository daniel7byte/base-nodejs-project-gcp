const CityService = require('../services/city')

const CityController = module.exports

CityController.findAll = async (req, res) => {
  try {
    const city = new CityService()
    return await city.findAll(res)
  } catch (error) {
    console.error(error)
  }
}
CityController.findOne = async (req, res) => {
  try {
    const city = new CityService()
    return await city.findByPk(res, req.params.cityId)
  } catch (error) {
    console.error(error)
  }
}
CityController.create = async (req, res) => {
  try {
    const city = new CityService()
    return await city.create(res, req.body)
  } catch (error) {
    console.error(error)
  }
}
CityController.update = async (req, res) => {
  try {
    const city = new CityService()
    return await city.update(res, req.params.cityId, req.body)
  } catch (error) {
    console.error(error)
  }
}
CityController.remove = async (req, res) => {
  try {
    const city = new CityService()
    return await city.remove(res, req.params.cityId)
  } catch (error) {
    console.error(error)
  }
}
