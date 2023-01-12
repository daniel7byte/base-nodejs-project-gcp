const router = require('express').Router()

router.use('/country', require('./api/country'))
router.use('/state', require('./api/state'))
router.use('/city', require('./api/city'))

module.exports = router
