const ProductoServicio = require('./../services/producto.service')
const productoServicio = new ProductoServicio()

async function getAllProducto (req, res) {
  try {
    let productos = await productoServicio.getAll()
    return res.status(200).json( { data: productos } )
  } catch ( err ) { res.status(500).json( { err })}
}

async function addProducto (req, res) {
  try {
    let producto
    if(req.body) {
      producto = await productoServicio.add(req.body)
    }
    return res.status(200).json( { data: producto } )
  } catch ( err ) { console.log(err) }
}

async function deleteProducto (req, res)  {
  try {
    let productoEliminado
    if(req.params.id_producto) {
      productoEliminado = await productoServicio.delete(req.params.id_producto)
    }
    res.status(200).json({data: productoEliminado})
  } catch ( err ) { console.log(err) }
}

async function updateProducto (req, res) {
  try {
    let productoActualizado
    if(req.body) {
      productoActualizado = await productoServicio.update(req.body)
    }
    res.status(200).json({data: productoActualizado})
  } catch ( err ) { console.log(err) }
}


module.exports = {
  getAllProducto,
  addProducto,
  deleteProducto,
  updateProducto
}