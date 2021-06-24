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
    let producto = {}
    switch (db) {
      case 'mongo': {
        producto = await ProductoModelMongo.getOne(id_producto)       
        break;         
      }
      case 'mysql': {
        producto = await ProductoModelMysql.getOne(id_producto)      
        break;    
      }
      case 'file': {
        producto = await ProductoModelFile.getOne(id_producto)       
        break;    
      } 
      case 'memoria': {
        producto = ProductoModelMemoria.getOne(id_producto)         
        break;    
      }      
      default:
        break;
    }

    return   producto
  }

  async add ( producto ) {
    let productoAgregado
    switch (db) {
      case 'mongo': {
        productoAgregado = await ProductoModelMongo.addProducto(producto)    
        break;         
      }
      case 'mysql': {
        productoAgregado = await ProductoModelMysql.addProducto(producto)    
        break;    
      }
      case 'file': {
        productoAgregado = await ProductoModelFile.addProducto(producto)       
        break;    
      } 
      case 'memoria': {
        productoAgregado = ProductoModelMemoria.addProducto(producto)         
        break;    
      }      
      default:
        break;
    }

    return   productoAgregado
  }

  async update ( producto) {
    let productoActualizado
    switch (db) {
      case 'mongo': {
        productoActualizado = await ProductoModelMongo.updateProducto(producto)    
        break;         
      }
      case 'mysql': {
        productoActualizado = await ProductoModelMysql.updateProducto(producto)      
        break;    
      }
      case 'file': {
        productoActualizado = await ProductoModelFile.updateProducto(producto)       
        break;    
      } 
      case 'memoria': {
        productoActualizado = ProductoModelMemoria.updateProducto(producto)      
        break;    
      }      
      default:
        break;
    }

    return   productoActualizado 
  }

  async delete ( id_producto) {
    let productoEliminado
    switch (db) {
      case 'mongo': {
        productoEliminado = await ProductoModelMongo.deleteProducto(id_producto)  
        break;         
      }
      case 'mysql': {
        productoEliminado = await ProductoModelMysql.deleteProducto(id_producto)        
        break;    
      }
      case 'file': {
        productoEliminado = await ProductoModelFile.deleteProducto(id_producto)       
        break;    
      } 
      case 'memoria': {
        productoEliminado = ProductoModelMemoria.deleteProducto(id_producto)          
        break;    
      }      
      default:
        break;
    }

    return   productoEliminado 
  }
}


module.exports = ProductoServicio