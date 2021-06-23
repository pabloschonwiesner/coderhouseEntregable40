const express = require('express')
const router = express.Router()
const { passport }= require('./../middlewares/auth')
const { authFacebook, registerUsuario, ingresarUsuario } = require('./../controllers/usuario.controller')

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  Usuario.findById(id, function (err, user) {
    done(err, user);
  });
});

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }))

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/api/login'}), authFacebook)

router.post('/register', registerUsuario)

router.post('/ingresar', ingresarUsuario)

module.exports = router