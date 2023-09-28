// ---------------------------------------------------------
// ROUTES FOR THE CHARACTER LIST PAGE '/characters'

const router = require('express').Router();
const { Character, Race } = require('../../models');
// const withAuth = require('../../utils/auth');

// ROUTE TO GET ALL CHARACTERS  

router.get('/races', async (req, res) => {
    try {
        const raceData = await Race.findAll();
        const race = raceData.get({ plain: true });
        console.log(race)
        return res.status(200).json(race)
    } catch (err) {
        res.status(400).json("can't get data")
    }
})
// api/characters/characters
router.get('/characters', async (req, res) => {
    try {
        // gets all characters to create list
        
        const characterData = await Character.findAll(
            {
            where: {
                user_id: 2
            }}
            );
        // const characters = characterData.get({ plain: true });
        const characters = characterData.map(character => character.get({plain:true}));
        console.log(characterData)
        return res.status(200).json(characters);
    } catch (err) {
        // error if there are no characters
        res.status(400).json(err)
    }
});

// ROUTE to GET CHARACTER by ID
// api/characters/characters/:id
router.get('/characters/:id', async (req, res) => {
    try {
        // gets character based off id
        const characterIdData = Character.findByPk(req.params.id);
        console.log(characterIdData)
        const characterId = characterIdData.get({ plain: true })
        res.status(200).json(characterId);
        // error if character id doesn't exist
    } catch (err) {
        res.status(400).json("Oops! Looks like this character id does not exist.")
    }
});

// ROUTE to UPDATE a CHARACTER (race, class, etc)
// api/characters/characters/:id
router.put('/characters/:id', async (req, res) => {
    try {
        Character.update(
            {
                name: req.body.name,
            },
            {
                where: {
                    character_id: req.params.character_id
                },
            }
        )
    } catch (err) {
        res.status(400).json(err);
    };
})

// ROUTE to DELETE a CHARACTER by ID
router.delete('/characters/:id', async (req, res) => {
    try {
        Character.delete(
            {
                where: {
                    character_id: req.params.chracter_id
                }
            }
        )
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

















// OLD CODE ----------------------------------------------------

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newCharacter = await Character.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newCharacter);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
