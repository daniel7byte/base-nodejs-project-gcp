const bcrypt = require('bcryptjs')
const tokenize = require('../helpers/tokenize')
const UserService = require('../services/user')
// TODO: I need to create the refresh token method

class AuthService {
  async login (data) {
    const user = await new UserService().findOne({ where: { email: data.email } })

    if (!user || !user.email || !bcrypt.compareSync(data.password, user.password)) {
      throw new Error('Unauthorized')
    }

    delete user.dataValues.password
    const token = tokenize.create(user)

    const response = { user: { ...user.dataValues }, token }

    return response
  }

  async refresh (data) {
    const user = await new UserService().findOne({ where: { email: data.email } })

    if (!user || !user.email || !bcrypt.compareSync(data.password, user.password)) {
      throw new Error('Unauthorized')
    }

    delete user.dataValues.password
    const token = tokenize.create(user.id, user.role)

    const response = { user: { ...user.dataValues }, token }

    return response
  }
}

module.exports = AuthService
