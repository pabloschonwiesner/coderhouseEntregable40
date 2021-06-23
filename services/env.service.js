require('dotenv').config()

let facebookId, facebookSecret, port, arrObj = [], modo, db

process.argv.forEach( arg => {
  let arrArg = arg.split('=')
  arrObj.push({ clave: arrArg[0], valor: arrArg[1]})
})

let findFacebookId = arrObj.find( item => item.clave.toLowerCase() == 'facebookid')
let findFacebookSecret = arrObj.find( item => item.clave.toLowerCase() == 'facebooksecret')
let findPort = arrObj.find( item => item.clave.toLowerCase() == 'port')
let findModo = arrObj.find( item => item.clave.toLowerCase() == 'modo')
let findDb = arrObj.find( item => item.clave.toLowerCase() == 'db')

facebookId = findFacebookId ? findFacebookId.valor : process.env.FACEBOOK_CLIENT_ID
facebookSecret = findFacebookSecret ? findFacebookSecret.valor : process.env.FACEBOOK_CLIENT_SECRET
port = findPort ? findPort.valor : process.env.PORT
modo = findModo ? findModo.valor : process.env.MODO
db = findDb ? findDb.valor : process.env.DB

module.exports = {
  process: {
    env: process.env
  },
  port,
  modo,
  facebookId,
  facebookSecret,
  db
}
