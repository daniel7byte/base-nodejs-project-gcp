const Repository = require('./repository')

const State = require('../database/models').state

class StateRepository extends Repository {
  constructor () {
    super()
    this.model = State
  }
}

module.exports = StateRepository
