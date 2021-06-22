const request = require('supertest')('http://localhost:3232')
const expect = require('chai').expect

const ProductoServicio = require('./../services/producto.service')


const productoServicio = new ProductoServicio()

describe('Test de integracion de productos', function() {
  describe('Listado de producto', function () {
    let response, productos
    
    beforeEach( async function () {
      response = await request.get('/api/producto')
      productos = response.body
    })

    it('debería responder status 200', function() {      
      expect(response.status).to.eql(200)
    })
    it('debería incluir una clave llamada data', function() {
      expect(productos).to.include.keys('data')
    })
    it('data debería ser un array', function() {
      expect(productos.data).to.be.an('array')
    })

  })

  describe('Agregar un producto', function () {
    let response, productoAgregado 
    
    beforeEach( async function () {
      response = await request.post('/api/producto', {
        nombre: "Ravioles Villa D'Agri",
        descripcion: "Ravioles de Verdura x 1kg",
        codigo: "ravio1",
        foto: "https://http2.mlstatic.com/D_NQ_NP_2X_706878-MLA45106019219_032021-F.webp",
        precio: 150.6,
        stock: 100
      })
      productoAgregado = response.body
    })

    it('debería responder status 200', function() {      
      expect(response.status).to.eql(200)
    })
    it('debería incluir una clave llamada data', function() {
      expect(productoAgregado).to.include.keys('data')
    })
    it('data deberia ser un objeto', function() {
      expect(productoAgregado.data).to.be.an('object')
    })
    it('data deberia tener una clave llamada _id', function() {
      expect(productoAgregado.data).to.include.keys('_id')
    })
  })

  describe('Actualizar un producto', function () {
    let response, productoActualizado
    
    beforeEach( async function () {
      response = await request.put('/api/producto', {
        nombre: "Ravioles Villa D'Agri",
        descripcion: "Ravioles de Verdura x 1kg",
        codigo: "ravio1",
        foto: "https://http2.mlstatic.com/D_NQ_NP_2X_706878-MLA45106019219_032021-F.webp",
        precio: 150.6,
        stock: 200
      })
      productoActualizado = response.body
    })
  
    it('debería responder status 200', function() {      
      expect(response.status).to.eql(200)
    })
    it('debería incluir una clave llamada data', function() {
      expect(productoActualizado).to.include.keys('data')
    })
    it('data deberia ser un objeto', function() {
      expect(productoActualizado.data).to.be.an('object')
    })
    it('data deberia tener una clave llamada ok', function() {
      expect(productoActualizado.data).to.include.keys('ok')
    })
  })

  describe('Eliminar un producto', function () {
    let response, productoEliminado
    
    beforeEach( async function () {
      response = await request.put('/api/producto', {
        nombre: "Ravioles Villa D'Agri",
        descripcion: "Ravioles de Verdura x 1kg",
        codigo: "ravio1",
        foto: "https://http2.mlstatic.com/D_NQ_NP_2X_706878-MLA45106019219_032021-F.webp",
        precio: 150.6,
        stock: 200
      })
      productoEliminado = response.body
    })
  
    it('debería responder status 200', function() {      
      expect(response.status).to.eql(200)
    })
    it('debería incluir una clave llamada data', function() {
      expect(productoEliminado).to.include.keys('data')
    })
    it('data deberia ser un objeto', function() {
      expect(productoEliminado.data).to.be.an('object')
    })
    it('data deberia tener una clave llamada ok', function() {
      expect(productoEliminado.data).to.include.keys('ok')
    })
  })



})


