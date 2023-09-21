const router = require('express').Router();
const { Race, Class } require('../../models');
const withAuth = require('../../utils/auth');

// Routes for race screen
router.post('api/newCharacter/race', async (req, res) => {
    const newRace = Race.create(req.body)
    await res.json(newRace)

})

// routes for
router.post




