const StateService = require('../services/state')

const StateController = module.exports

StateController.findAll = async (req, res) => {
  try {
    const state = new StateService()
    return await state.findAll(res)
  } catch (error) {
    console.error(error)
  }
}
StateController.findOne = async (req, res) => {
  try {
    const state = new StateService()
    return await state.findByPk(res, req.params.stateId)
  } catch (error) {
    console.error(error)
  }
}
StateController.create = async (req, res) => {
  try {
    const state = new StateService()
    return await state.create(res, req.body)
  } catch (error) {
    console.error(error)
  }
}
StateController.update = async (req, res) => {
  try {
    const state = new StateService()
    return await state.update(res, req.params.stateId, req.body)
  } catch (error) {
    console.error(error)
  }
}
StateController.remove = async (req, res) => {
  try {
    const state = new StateService()
    return await state.remove(res, req.params.stateId)
  } catch (error) {
    console.error(error)
  }
}
