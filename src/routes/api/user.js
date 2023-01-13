const router = require('express').Router()
const { checkAuth } = require('../../middleware/auth')
const UserController = require('../../controllers/user')

router.post('/', UserController.create)
router.get('/', checkAuth(['ADMIN']), UserController.findAll)
router.get('/:userId', UserController.findOne)
router.put('/:userId', UserController.update)
router.delete('/:userId', UserController.remove)

module.exports = router
