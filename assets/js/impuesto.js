// Clase para calcular el impuesto
export default class CalculoImpuesto {
    static calcularImpuesto(montoBrutoAnual, deducciones) {
      return (montoBrutoAnual - deducciones) * 0.21; // Fórmula de cálculo
    }
  }
  