const { db } = require('./env.service')
const ConexionFactory = require('./dbs/conexionFactory.dbs')

class DbService {
  db = null
  instance = 0

  async DbConnect () {
    return ConexionFactory.create(db).connect()
  }

  async GetConnection () {
    try {
      this.instance++
      console.log(`GetConnection instance ${this.instance} - ${db}`);

      if( this.db != null ) {
        console.log('Conexion ya había sido iniciada')
        return this.db
      } else {
        console.log('Conexion iniciada')
        this.db = await this.DbConnect()
        return this.db
      }
    } catch ( e ) { console.log(e);return e; }
  }

}

module.exports = new DbService()