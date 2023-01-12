const router = require('express').Router()
const CityController = require('../../controllers/city')

router.post('/', CityController.create)
router.get('/', CityController.findAll)
router.get('/:cityId', CityController.findOne)
router.put('/:cityId', CityController.update)
router.delete('/:cityId', CityController.remove)

module.exports = router
