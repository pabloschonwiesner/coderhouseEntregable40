const mysql = require('mysql2/promise')
const { process } = require('./../env.service')

class ConexionMysql {
  
  // conn
  // static _instancia

  // constructor () {
  //   this.conn = mysql.createConnection({
  //     host: process.env.HOST_MYSQL,
  //     user: process.env.USER_MYSQL,
  //     password: process.env.PASSWORD_MYSQL,
  //     database: process.env.DATABASE_MYSQL
  //   })
  //   this.connect()
  // }

  // async DbConnect() {
  //   try {
  
  //     this.conn.connect( (err) => {
  //       if(err) {
  //         return err
  //       }
  //     })
  //   } catch ( err ) { return err }
  // }
  
  // async connect() {
  //   try {
  //     if(this.conn == null) {
  //       await this.DbConnect()
  //     }
  //   } catch ( err ) { return err }
  // }

  // static instancia () {
  //   return this._instancia || (this._instancia = new this())
  // }

  // static query (query) {

  //   return new Promise((resolve,  reject) => {      
  //     this.instancia().conn.query(query, (err, results) => {
  //       if(err) {
  //         reject(err)
  //       }
  //       resolve(results)
  //     })
  //   })
  // }

  connection

  constructor() {
    this.connect()
  }

  async connect () {
    if(this.connection == null) {
      this.connection = await mysql.createConnection({
        host: process.env.HOST_MYSQL,
        user: process.env.USER_MYSQL,
        password: process.env.PASSWORD_MYSQL,
        database: process.env.DATABASE_MYSQL
      })
    }
    return this.connection
  }


}

module.exports = ConexionMysql