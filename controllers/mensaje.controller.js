const { checkIsAuthenticated }= require('./../middlewares/auth')
const MensajeServicio = require('./../services/mensaje.service')

const mensajeServicio = new MensajeServicio()

module.exports = async (req, res) => {
  res.render('chat', { productos: await mensajeServicio.getAll()} )
}