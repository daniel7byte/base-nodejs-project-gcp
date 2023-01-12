const Repository = require('./repository')

const __model__PascalCase__ = require('../database/models').__model__CamelCase__ // FIXME: __model__CamelCase__ or __model__SnakeCase__

class __model__PascalCase__Repository extends Repository {
  constructor () {
    super()
    this.model = __model__PascalCase__
  }
}

module.exports = __model__PascalCase__Repository
