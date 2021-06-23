const { db } = require('./env.service')
const ProductoModelMongo = require('./../models/mongo/producto.model')
const ProductoModelMysql = require('./../models/mysql/producto.model')
const ProductoModelFile = require('./../models/file/producto.model')
const ProductoModelMemoria = require('./../models/memory/producto.model')


class ProductoServicio {

  async getAll () {
    let prod = []

    switch (db) {
      case 'mongo': {
        prod = await ProductoModelMongo.getAll()      
        break;         
      }
      case 'mysql': {
        prod = await ProductoModelMysql.getAll()       
        break;    
      }
      case 'file': {
        prod = await ProductoModelFile.getAll()       
        break;    
      } 
      case 'memoria': {
        prod = ProductoModelMemoria.getAll()       
        break;    
      }      
      default:
        break;
    }


    if(prod && prod.length == 0) {      
      return []
    }
    
    return prod;
  }

  async getOne ( id_producto ) {
    let producto = await ProductoModelMongo.getOne(id_producto) 
    return   producto
  }

  async add ( producto ) {
    // console.log(producto)
    return await ProductoModelMongo.addProducto(producto)
  }

  async update ( producto) {
    return await ProductoModelMongo.updateProducto(producto)    
  }

  async delete ( id_producto) {
    return await ProductoModelMongo.deleteProducto(id_producto)
  }
}


module.exports = ProductoServicio