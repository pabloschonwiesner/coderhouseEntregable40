const express = require('express')
const router = express.Router()
const { checkIsAuthenticated }= require('./../middlewares/auth')
const mensajesGetAll = require('./../controllers/mensaje.controller')

router.get('/chat', checkIsAuthenticated, mensajesGetAll)

module.exports = router