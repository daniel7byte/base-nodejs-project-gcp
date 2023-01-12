const Service = require('./service')
const __model__PascalCase__Repository = require('../repositories/__model__SnakeCase__')

class __model__PascalCase__Service extends Service {
  constructor () {
    super(new __model__PascalCase__Repository())
    this.model = '__model__PascalCase__'
  }
}

module.exports = __model__PascalCase__Service
