const router = require('express').Router();
const { Race, Class } require('../../models');

// Routes for race screen
router.post('/newCharacter/race', async (req, res) => {
    const newRace = Race.create(req.body)
    await res.json(newRace)

})




