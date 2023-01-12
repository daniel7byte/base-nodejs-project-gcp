const Service = require('./service')
const CountryRepository = require('../repositories/country')

class CountryService extends Service {
  constructor () {
    super(new CountryRepository())
    this.model = 'Country'
  }
}

module.exports = CountryService
