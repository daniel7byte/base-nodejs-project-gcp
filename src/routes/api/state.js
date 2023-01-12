const router = require('express').Router()
const StateController = require('../../controllers/state')

router.post('/', StateController.create)
router.get('/', StateController.findAll)
router.get('/:stateId', StateController.findOne)
router.put('/:stateId', StateController.update)
router.delete('/:stateId', StateController.remove)

module.exports = router
