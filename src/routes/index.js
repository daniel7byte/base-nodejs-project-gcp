const router = require('express').Router()

router.use('/country', require('./api/country'))
router.use('/state', require('./api/state'))
router.use('/city', require('./api/city'))
router.use('/user', require('./api/user'))
router.use('/auth', require('./api/auth'))

module.exports = router
