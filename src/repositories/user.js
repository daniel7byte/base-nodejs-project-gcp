const Repository = require('./repository')

const User = require('../database/models').user

class UserRepository extends Repository {
  constructor () {
    super()
    this.model = User
  }
}

module.exports = UserRepository
