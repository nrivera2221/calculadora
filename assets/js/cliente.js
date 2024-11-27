// Clase para manejar los datos del cliente
export default class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
      this._nombre = nombre;
      this._montoBrutoAnual = montoBrutoAnual;
      this._deducciones = deducciones;
    }
  
    // Getters y Setters
    get nombre() {
      return this._nombre;
    }
  
    set nombre(valor) {
      this._nombre = valor;
    }
  
    get montoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  
    set montoBrutoAnual(valor) {
      this._montoBrutoAnual = valor;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(valor) {
      this._deducciones = valor;
    }
  }
  