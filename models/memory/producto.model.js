const ConexionMemoria = require('./../../services/dbs/conexionMemoria.dbs')

class ProductoModelMemory {
  
  getAll () {
    try {
      return ConexionMemoria.connect()      
    } catch ( err ) { 
      return []
    } 
  }

  async getOne ( id_producto ) {
    try {
      let productos = this.getAll()
      return productos.find( producto => producto.id_producto == id_producto )
    } catch ( err ) { return err }
  }

  async addProducto ( producto ) {
    try {
      producto.id_producto = await this.lastId() + 1
      this.guardar(producto)
      return producto
    } catch ( err ) { return err }
  }

  async updateProducto (producto) {
    try {
      let productoBuscado = await this.getOne( producto.id_producto )
      let index = await this.getIndexArray( producto.id_producto )
      if(!productoBuscado) {
        reject('No existe el producto')
      }

      productoBuscado.titulo = producto.titulo
      productoBuscado.precio = producto.precio
      productoBuscado.thumbnail = producto.thumbnail

      this.guardar( producto, index )
      return productoBuscado
    } catch ( err ) { return err }  
  }

  async deleteProducto ( id_producto ) {
    try {

      let index = await this.getIndexArray( id_producto )

      if(index < 0) {
        reject('No existe el producto')
      }

      ConexionMemoria.connect().splice(index, 1)      
      return 1
    } catch ( err ) { return err }
  }

  async lastId () {
    try {
      let productos = this.getAll()
      let id = productos.lenght > 0 ? productos[productos.lenght].id_producto : 0
      return id
    } catch (err) { return err }  
  }

  async guardar ( producto, index ) {
    try {
      if(index != null) {
        ConexionMemoria.connect()[index] = producto
      } else {
        ConexionMemoria.connect().push(producto)
      }
      return true
    } catch ( err ) { return err }
    
  }

  async getIndexArray ( id_producto ) {
    try {
      let productos = this.getAll()
      return productos.findIndex( producto => producto.id_producto == id_producto )
    } catch ( err ) { return err }    
  }
}

module.exports = new ProductoModelMemory()