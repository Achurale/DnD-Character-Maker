// ---------------------------------------------------------
// ROUTES FOR THE CHARACTER LIST PAGE '/characters'

const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

// ROUTE TO GET ALL CHARACTERS
router.get('/characters', async (req, res) => {
    try {
        // gets all characters to create list
        const characterData = await Character.findAll();
        res.status(200).json(characterData);
    } catch (err) {
        // error if there are no characters
        res.status(400).json(err)
    }
});

// ROUTE to GET CHARACTER by ID
router.get('/characters/:id', withAuth, async (req, res) => {
    try {
        // gets character based off id
        const characterId = Character.findByPk(req.params.id);
        res.status(200).json(characterId);
        // error if character id doens't exist
    } catch (err) {
        res.status(400).json(err)
    }
});

// ROUTE to UPDATE a CHARACTER (race, class, etc)
router.put('/characters/:id', withAuth, async (req, res) => {
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
router.delete('/characters/:id', withAuth, async (req, res) => {
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

module.exports = router

















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
