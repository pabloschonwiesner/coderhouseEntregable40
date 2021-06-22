const express = require('express')
const router = express.Router()
const ProductoServicio = require('./../services/producto.service')

const productoServicio = new ProductoServicio()


// router.get('/', checkIsAuthenticated,  (req, res) => {
//   res.redirect('/producto')      
// })

router.get('/producto', async (req, res) => {
  try {
    let productos = await productoServicio.getAll()
    return res.status(200).json( { data: productos } )
  } catch ( err ) { res.status(500).json( { err })}
})


router.post('/producto', async  (req, res) => {
  try {
    let producto
    if(req.body) {
      producto = await productoServicio.add(req.body)
    }
    return res.status(200).json( { data: producto } )
  } catch ( err ) { console.log(err) }
})

router.delete('/producto/:id_producto', async  (req, res) => {
  try {
    let productoEliminado
    if(req.params.id_producto) {
      productoEliminado = await productoServicio.delete(req.params.id_producto)
    }
    // res.redirect('/api')
    res.status(200).json({data: productoEliminado})
  } catch ( err ) { console.log(err) }
})

router.put('/producto', async  (req, res) => {
  try {
    let productoActualizado
    if(req.body) {
      productoActualizado = await productoServicio.update(req.body)
    }
    // res.redirect('/api')
    res.status(200).json({data: productoActualizado})
  } catch ( err ) { console.log(err) }
})

module.exports = router