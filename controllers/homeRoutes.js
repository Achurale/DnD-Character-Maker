const router = require('express').Router();
const { Character, User, Role, Background, Race} = require('../models');
const withAuth = require('../utils/auth');


// login route for login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    // if user is not logged in, render 'login' page
    res.render('login');
  });

// signup route for signup page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    } else {
        res.render('signUp')
    }
});

// route for homepage
router.get('/', (req, res) => {
    res.render('homepage')
});

// route for choices screen
router.get('/profile', (req, res) => {
    res.render('profile')
})

// route to make new character
router.get('/newCharacter', async (req, res) => {
    const roleData = await Role.findAll();
    const role = roleData.map(role => role.get({plain:true}));

    const backgroundData = await Background.findAll();
    const background = backgroundData.map(background => background.get({plain:true}));

    const raceData = await Race.findAll();
    const race = raceData.map(race => race.get({plain:true}));
    console.log(race)
    console.log(background)
    console.log(role)
    res.render('characterForm', {role, background, race})
})

// route to view characters
router.get('/characters', async (req, res) => {
    const characterData = await Character.findAll({
        include: [{
            model: Race,
            attributes: ['name']
        },{
            model: Role,
            attributes: ['name']
        },{
            model: Background,
            attributes: ['name']
        }]
});
    const characters = characterData.map(character => character.get({plain:true}));
    console.log(characters)
    res.render('viewCharacters', {characters})
})

module.exports = router











// OLD CODE -----------------------------------------
// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const characterData = await Character.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const characters = characterData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       characters, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // finds character by Id
// router.get('/character/:id', async (req, res) => {
//   try {
//     const characterData = await Character.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const character = characterData.get({ plain: true });

//     res.render('character', {
//       ...character,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/homepage');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;
