const fs = require('fs')
const path = require('path')

class ProductoModelFile {

  async getAll () {
    try {
      console.log('leer archivo: ', path.resolve( __dirname, '../../services/dbs/productos.txt'))
      let contenido = await fs.promises.readFile( path.resolve( __dirname, '../../services/dbs/productos.txt'), 'utf-8')
      return JSON.parse(contenido)
    } catch ( err ) { 
      return []
    } 
  }

  async getOne ( id_producto ) {
    try {
      let contenido = await this.getAll()
      return contenido.find( producto => producto.id_producto == id_producto )
    } catch (err) { return err }  
  }

  async addProducto ( producto ) {
    try {
      let contenido = await this.getAll()
      producto.id_producto = await this.lastId() + 1
      contenido.push(producto)
      await this.guardar(contenido)
      return producto
    } catch (err) { return err }    
  }

  async updateProducto (producto) {
    try {
      let contenido = await this.getAll()
      let productoFile = await this.getOne( producto.id_producto )
      let index = await this.getIndexArray( producto.id_producto )
      if(!productoFile) {
        return 'No existe el producto'
      }

      productoFile.title = producto.title
      productoFile.price = producto.price
      productoFile.thumbnail = producto.thumbnail

      contenido[index] = productoFile
      await this.guardar( contenido )
      
      return productoFile
    } catch ( err ) { return err }    
  }

  async deleteProducto ( id_producto) {
    try {
      let contenido = await this.getAll()
      let index = await this.getIndexArray( id_producto )

      if(index < 0) {
        return 'No existe el producto'
      }

      contenido.splice(index, 1)
      await this.guardar( contenido )
      
      return 1
    } catch ( err ) { return err } 
  }

  async lastId () {
    try {
      let contenido = JSON.parse(JSON.stringify(await this.getAll()))
      let id = contenido.length > 0 ? contenido[contenido.length -1].id_producto : 0
      return id
    } catch (err) { return err}
  }

  async guardar ( contenido ) {
    try {
      await fs.promises.writeFile( path.resolve( __dirname, '../../services/dbs/productos.txt'), JSON.stringify(contenido, null, '\t'), 'utf-8')
      
      return true
    } catch ( err ) { return err }
  }

  async getIndexArray ( id_producto ) {
    try {
      let contenido = JSON.parse(JSON.stringify(await this.getAll()))
      return contenido.findIndex( producto => producto.id_producto == id_producto )
    } catch ( err ) { return err }    
  }
}

module.exports = new ProductoModelFile()