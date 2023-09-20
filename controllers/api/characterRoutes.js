const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

// ROUTE TO GET ALL CHARACTERS
router.get('/characters', async (req, res) => {

})

// ROUTE to GET CHARACTER by ID
router.get('/characters/:id', async (req, res) => {

})

// ROUTE to UPDATE a CHARACTER (race, class, etc)
router.put('/characters')

// ROUTE to DELETE a CHARACTER by ID
router.delete('/characters/:id', async (req, res) => {

})

















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
