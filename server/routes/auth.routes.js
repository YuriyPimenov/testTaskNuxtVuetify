const {Router} = require('express')
const passport = require('passport')
const {login, profile} = require('../controllers/auth.controller')
const router = Router()

// /api/auth/login
router.post('/login', login)
// /api/auth/profile
router.post('/profile',passport.authenticate('jwt', {session: false}), profile)
module.exports = router