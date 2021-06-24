class ConexionMemoria {
  productos
 
  async connect() {
    try {
      if(this.productos == null) {
        this.productos = []
      }
      return this.productos
    } catch ( err ) { return err }
  }

}

module.exports = ConexionMemoria