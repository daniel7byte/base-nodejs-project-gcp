const Repository = require('./repository')

const Country = require('../database/models').country
const State = require('../database/models').state

class CountryRepository extends Repository {
  constructor () {
    super()
    this.model = Country
  }

  // custome methods
  async findAll (options = {}) {
    return await Country.findAll({
      include: [{
        model: State,
        as: 'states',
        attributes: ['id', 'name', 'is_available']
      }]
    })
  }
}

module.exports = CountryRepository
