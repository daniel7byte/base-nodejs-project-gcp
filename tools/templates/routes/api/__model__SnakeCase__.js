const router = require('express').Router()
const __model__PascalCase__Controller = require('../../controllers/__model__SnakeCase__')

router.post('/', __model__PascalCase__Controller.create)
router.get('/', __model__PascalCase__Controller.findAll)
router.get('/:__model__CamelCase__Id', __model__PascalCase__Controller.findOne)
router.put('/:__model__CamelCase__Id', __model__PascalCase__Controller.update)
router.delete('/:__model__CamelCase__Id', __model__PascalCase__Controller.remove)

module.exports = router
