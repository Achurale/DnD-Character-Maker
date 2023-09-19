const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./characterRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);

module.exports = router;
