const ConexionMysql = require('./../../services/dbs/conexionMysql.dbs')

class ProductoModelMysql {
  // db
  // constructor () {
  //   this.conectar()
  // }

  // async conectar () {
  //   console.log('conectar mysql')
  //   let conexionMysql = new ConexionMysql()
  //   this.db = await conexionMysql.connect()
  // }

  async getAll () {
    try {
      let query = 'SELECT * FROM Productos';
      let db = new ConexionMysql()
      let pool = await db.connect()
      pool.getConnection( async (err, conn) => {
        if(err) throw err
        console.log({conn})
        let result =  await conn.query( query )
        return result
      })
    } catch ( err ) { console.log(err); return err }
  }

  async getOne ( id_producto ) {
    let query = `SELECT * FROM Productos WHERE id_producto = ${ConexionMysql.instancia().conn.escape(id_producto)}`;

    return new Promise((resolve, reject) => {
      this.conn.query( query, (err, results) => {
        if(err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
    })

  }

  async add ( producto ) {

    let query = `INSERT INTO Productos (titulo, precio, thumbnail) VALUES (
      ${ConexionMysql.instancia().conn.escape(producto.titulo)}, 
      ${ConexionMysql.instancia().conn.escape(producto.precio)}, 
      ${ConexionMysql.instancia().conn.escape(producto.thumbnail)}
    )`;

    return new Promise( (resolve, reject) => {
      this.conn.query( query, async (err, results) => {
        if(err) {
          reject(err)
        } else {
          let productoAgregado = await this.getOne( results.insertId )
          resolve(productoAgregado)
        }
      })
    })
  }

  async update ( producto) {
    let query = `UPDATE Productos SET 
      titulo = ${ConexionMysql.instancia().conn.escape(producto.titulo)}, 
      precio = ${ConexionMysql.instancia().conn.escape(producto.precio)}, 
      thumbnail = ${ConexionMysql.instancia().conn.escape(producto.thumbnail)}
      WHERE id_producto = ${ConexionMysql.instancia().conn.escape(producto.id_producto)}
    )`;

    return new Promise( (resolve, reject) => {
      this.conn.query( query, async (err, results) => {
        if(err) {
          reject(err)
        } else {
          let productoActualizado = await this.getOne( producto.id_producto )
          resolve(productoActualizado)
        }
      })
    })
  }

  async delete ( id_producto) {
    let query = `DELETE FROM Productos WHERE id_producto =  ${ConexionMysql.instancia().conn.escape(id_producto)}`;

    return new Promise((resolve, reject) => {
      this.conn.query( query, (err, results) => {
        if(err) {
          reject(err)
        } else {
          resolve(results.affectedRows)
        }
      })
    })
  }
}

module.exports = new ProductoModelMysql()