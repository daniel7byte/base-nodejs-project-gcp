const Service = require('./service')
const CityRepository = require('../repositories/city')

class CityService extends Service {
  constructor () {
    super(new CityRepository())
    this.model = 'City'
  }
}

module.exports = CityService
