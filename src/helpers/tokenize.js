const dayjs = require('dayjs')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = {
  create: (user) => {
    const payload = {
      sub: {
        ...user.dataValues
      },
      iat: dayjs().unix(),
      exp: dayjs().add(3, 'month').endOf('month').unix()
    }
    return jwt.sign(payload, config.jwt.secret)
  },
  verify: (token) => {
    return jwt.verify(token, config.jwt.secret)
  }
}
