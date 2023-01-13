const Service = require('./service')
const UserRepository = require('../repositories/user')

class UserService extends Service {
  constructor () {
    super(new UserRepository())
    this.model = 'User'
  }
}

module.exports = UserService
