const ConexionMysql = require('./../../services/dbs/conexionMysql.dbs')

class ProductoModelMysql {
  
  async getAll () {
    try {
      let query = 'SELECT * FROM Productos';
      let db = new ConexionMysql()
      let conn = await db.connect()
      let result = await conn.query(query)
      return result[0]
    } catch ( err ) { console.log(err); return err }
  }

  async getOne ( id_producto ) {
    let query = `SELECT * FROM Productos WHERE id_producto = ${ConexionMysql.instancia().conn.escape(id_producto)}`;

    let db = new ConexionMysql()
    let conn = await db.connect()
    let result = await conn.query(query)
    return result[0]

  }

  async addProducto ( producto ) {

    let query = `INSERT INTO Productos (title, price, thumbnail) VALUES (?, ?, ?)`

    let db = new ConexionMysql()
    let conn = await db.connect()
    let result = await conn.execute(query, [
      conn.escape(producto.title), 
      conn.escape(producto.price), 
      conn.escape(producto.thumbnail)
    ])
    return result[0]
  }

  async updateProducto ( producto) {
    let query = `UPDATE Productos SET title = ?, price = ?, thumbnail = ? WHERE id_producto = ?`

    let db = new ConexionMysql()
    let conn = await db.connect()
    let result = await conn.execute(query, [
      conn.escape(producto.title), 
      conn.escape(producto.price), 
      conn.escape(producto.thumbnail),
      conn.escape(producto.id_producto)
    ])
    return result[0]

  }

  async deleteProducto ( id_producto) {
    let query = `DELETE FROM Productos WHERE id_producto = ?`;

    let db = new ConexionMysql()
    let conn = await db.connect()
    let result = await conn.execute(query, [
      conn.escape(id_producto)
    ])
    return result[0]
  }
}

module.exports = new ProductoModelMysql()