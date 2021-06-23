const Producto = require('./producto')

class ProductoModelMongo {

  async getAll () {
    return Producto.find({}).lean() 
  }

  async getOne ( id_producto ) {
    return Producto.findOne({ id_producto }, {})  
  }

  async addProducto ( producto ) {
    
    let nuevoProducto = new Producto( { title: producto.title, price: producto.price, thumbnail: producto.thumbnail })
    return await nuevoProducto.save()
  }

  async updateProducto ( producto) {
    return Producto.updateOne( { id_producto: producto.id_producto }, { title: producto.title, price: producto.price, thumbnail: producto.thumbnail })   
  }

  async deleteProducto ( id_producto) {
    return await Producto.deleteOne( {id_producto })
  }
}

module.exports = new ProductoModelMongo()