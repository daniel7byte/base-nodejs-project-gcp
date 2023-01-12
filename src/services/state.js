const Service = require('./service')
const StateRepository = require('../repositories/state')

class StateService extends Service {
  constructor () {
    super(new StateRepository())
    this.model = 'State'
  }
}

module.exports = StateService
