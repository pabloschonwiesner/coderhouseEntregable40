const express = require('express')
const router = express.Router()
const { getAllProducto, addProducto, deleteProducto, updateProducto } = require('./../controllers/producto.controller')

router.get('/producto', getAllProducto)

router.post('/producto', addProducto)

router.delete('/producto/:id_producto', deleteProducto)

router.put('/producto', updateProducto)

module.exports = router