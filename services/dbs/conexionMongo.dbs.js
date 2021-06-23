const mongoose = require('mongoose')
const { process } = require('./../env.service')

class ConexionMongo  {
  db = null

  async DbConnect () {
    try {
      let mongo = mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
      console.log('Base de datos Mongo ONLINE');
      return mongo
    } catch (err) { return err }
  }

  async connect() {
    try {
      if( this.db == null) {
        this.db = await this.DbConnect()
      }
      return this.db
    } catch ( err ) { return err }
    
  }
}

module.exports = ConexionMongo
