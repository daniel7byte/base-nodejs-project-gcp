const __model__PascalCase__Service = require('../services/__model__SnakeCase__')

const __model__PascalCase__Controller = module.exports

__model__PascalCase__Controller.findAll = async (req, res) => {
  try {
    const __model__CamelCase__ = new __model__PascalCase__Service()
    return await __model__CamelCase__.findAll(res)
  } catch (error) {
    console.error(error)
  }
}
__model__PascalCase__Controller.findOne = async (req, res) => {
  try {
    const __model__CamelCase__ = new __model__PascalCase__Service()
    return await __model__CamelCase__.findByPk(res, req.params.__model__CamelCase__Id)
  } catch (error) {
    console.error(error)
  }
}
__model__PascalCase__Controller.create = async (req, res) => {
  try {
    const __model__CamelCase__ = new __model__PascalCase__Service()
    return await __model__CamelCase__.create(res, req.body)
  } catch (error) {
    console.error(error)
  }
}
__model__PascalCase__Controller.update = async (req, res) => {
  try {
    const __model__CamelCase__ = new __model__PascalCase__Service()
    return await __model__CamelCase__.update(res, req.params.__model__CamelCase__Id, req.body)
  } catch (error) {
    console.error(error)
  }
}
__model__PascalCase__Controller.remove = async (req, res) => {
  try {
    const __model__CamelCase__ = new __model__PascalCase__Service()
    return await __model__CamelCase__.remove(res, req.params.__model__CamelCase__Id)
  } catch (error) {
    console.error(error)
  }
}
