const Repository = require('./repository')

const City = require('../database/models').city

class CityRepository extends Repository {
  constructor () {
    super()
    this.model = City
  }
}

module.exports = CityRepository
