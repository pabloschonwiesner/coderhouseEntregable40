const ConexionMongo = require("./conexionMongo.dbs");
const ConexionMysql = require("./conexionMysql.dbs");
const ConexionFile = require("./conexionFile.dbs");
const ConexionMemoria = require("./conexionMemoria.dbs");

class ConexionFactory {
  create(type) {
    switch (type) {
      case 'mongo': 
        return new ConexionMongo()
      
      case 'mysql':
        return new ConexionMysql()  

      case 'file':
        return new ConexionFile()  
      
      case 'memoria':
        return new ConexionMemoria()  
      
      default: {
        console.log('No se deficion la persistencia')
      }
        
    }
  }
}

module.exports = new ConexionFactory()