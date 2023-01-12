const router = require('express').Router()
const CountryController = require('../../controllers/country')

router.post('/', CountryController.create)
router.get('/', CountryController.findAll)
router.get('/:countryId', CountryController.findOne)
router.put('/:countryId', CountryController.update)
router.delete('/:countryId', CountryController.remove)

module.exports = router
