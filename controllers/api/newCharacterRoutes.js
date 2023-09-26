// -------------------------------------------------------
// ROUTES FOR THE CREATE A CHARACTER PAGE '/newChracter'

const router = require('express').Router();
const { Race, Class, Background, Character } = require('../../models');
const withAuth = require('../../utils/auth');

// api/newCharacter/newCharacter
router.post('/newCharacter', async (req, res) => {
    // Adds selected race, class, and background to db
    try {
        const newRace = await Race.create(req.body);
        res.status(200).json(newRace)
    } catch (err) {
        res.status(400).json(err)
    };

    try {
        const newClass = await Class.create(req.body);
        res.status(200).json(newClass)
    } catch (err) {
        res.status(400).json(err)
    };

    try {
        const newBackground = await Background.create(req.body);
        res.status(200).json(newBackground);
    } catch (err) {
        res.status(400).json(err)
    }
    // -----------------------------------------------------------
    // adds inputs entered by the user to db. (character name, level, player name, and stats)
    try {
    const newCharacter = await Character.create({
        ...req.body,
        user_id: req.session.user_id,
    });
    res.status(200).json(newCharacter);
    } catch (err) {
    res.status(400).json(err);
    }
});

router.post('/newCharacter/newRace', async (req, res) => {
    try {
        const newRace = await Race.create(req.body);
        res.status(200).json(newRace)
    } catch (err) {
        res.status(400).json(err)
    };
}) 

module.exports = router;


