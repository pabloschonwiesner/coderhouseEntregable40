const fs = require('fs')

class ConexionFile {
  constructor () {
  }

  path = __dirname + '/productos.txt'

  connect() {
    return new Promise( async (resolve, reject) => {
      try {
        if ( fs.existsSync( this.path ) == false) {
          await fs.promise.writeFile( this.path , JSON.stringify('', null, '\t'), 'utf-8')
          console.log('Archivo creado ' + typeof f)
        }
        resolve(true)
      } catch ( err ) { reject(err) }
    })
  }
}

module.exports = ConexionFile