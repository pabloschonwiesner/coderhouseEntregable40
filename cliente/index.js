const axios = require('axios')


async function listarProductos () {
  // registro de usuario
  return await axios.get('http://localhost:3232/api/producto')
}
 
async function agregarProducto () {
  //agregar un producto
  return await axios.post('http://localhost:3232/api/producto', {
    nombre: "Ravioles Villa D'Agri",
    descripcion: "Ravioles de Verdura x 1kg",
    codigo: "ravio1",
    foto: "https://http2.mlstatic.com/D_NQ_NP_2X_706878-MLA45106019219_032021-F.webp",
    precio: 150.6,
    stock: 100
  })
}
  
async function eliminarProducto () {
  //eliminar un producto
  return await axios.delete('http://localhost:3232/api/producto/17')
}
 
async function actualizarProducto () {
     //   //actualizar un producto
  return await axios.put(`http://localhost:3232/api/producto`,  {
    nombre: "Ravioles Villa D'Agri",
    descripcion: "Ravioles de Verdura x 1kg",
    codigo: "ravio1",
    foto: "https://http2.mlstatic.com/D_NQ_NP_2X_706878-MLA45106019219_032021-F.webp",
    precio: 160,
    stock: 200,
    id_producto: 16
  })
}


(function testAxios () {
  console.log('Inicio testAxios');
  Promise.all([listarProductos(), agregarProducto(), actualizarProducto(), eliminarProducto()])
    .then( results => {
      let productos = results[0].data.data
      let productoAgregado = results[1].data.data
      let productoActualizado = results[2].data.data
      let productoEliminado = results[3].data.data

      console.log('Listar productos: ', productos)
      console.log('Producto agregado: ', productoAgregado)
      console.log('Producto actualizado: ', productoActualizado)
      console.log('Producto eliminado: ', productoEliminado)
    })
    .catch( err => console.log(err))
})()

