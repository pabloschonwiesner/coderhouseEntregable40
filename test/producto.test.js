const request = require('supertest')('http://localhost:3233')
const expect = require('chai').expect

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
      await request.post('/api/producto')
        .send({
          title: "Ravioles Villa D'Agri",
          thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_706878-MLA45106019219_032021-F.webp",
          price: 150.6
        })
        .set('Content-Type', 'application/json')
        .then( data => {
          response = data
          productoAgregado = data.body
        })
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
    // it('data deberia tener una clave llamada _id', function() {
    //   expect(productoAgregado.data).to.include.keys('_id')
    // })
  })

  describe('Actualizar un producto', function () {
    let response, productoActualizado
    
    beforeEach( async function () {
      await request.put('/api/producto')
        .send({
          title: "Ravioles Villa D'Agri",
          thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_706878-MLA45106019219_032021-F.webp",
          price: 180.6,
          id_producto: 1
        })
        .set('Content-Type', 'application/json')
        .then( data => {
          response = data
          productoActualizado = data.body
        })
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
    // it('data deberia tener una clave llamada ok', function() {
    //   expect(productoActualizado.data).to.include.keys('ok')
    // })
  })

  describe('Eliminar un producto', function () {
    let response, productoEliminado
    
    beforeEach( async function () {
      response = await request.delete(`/api/producto/1`)
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
    // it('data deberia tener una clave llamada ok', function() {
    //   expect(productoEliminado.data).to.include.keys('ok')
    // })
  })



})


