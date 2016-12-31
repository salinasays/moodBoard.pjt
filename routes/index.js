const router = require('express').Router();

router.use('/users', require('./userRoutes.js'));
router.use('/boards', require('./boardRoutes.js'));
router.use('/images', require('./imageRoutes.js'));

module.exports = router;