const UsuarioServicio = require('./../services/usuario.service')

const usuarioServicio = new UsuarioServicio()

function authFacebook (req, res) {
  req.session.facebookId = req.user.facebookId
  return res.status(200).json( { data: { facebookId }} )
}

async function registerUsuario (req, res) {
  let usuario = await usuarioServicio.getUserByName(req.body.usuario.toLowerCase())
  if(usuario.length == 0) {
    let nuevoUsuario = { 
      usuario: req.body.usuario.toLowerCase(), 
      password: req.body.password, 
      email: req.body.email.toLowerCase()
    }
  
    usuario = await usuarioServicio.add(nuevoUsuario)
  }
  return res.status(200).json( { data: usuario } )
}

async function ingresarUsuario (req, res) {
  try {
    res.status(200).json( { data: 'login correcto' }) 
  } catch ( err ) { console.log(err) }
}

module.exports = {
  authFacebook,
  registerUsuario,
  ingresarUsuario
}