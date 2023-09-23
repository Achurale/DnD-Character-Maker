const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const newCharacterRoutes = require('./newCharacterRoutes');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
router.use('/newCharacter', newCharacterRoutes)

module.exports = router;
