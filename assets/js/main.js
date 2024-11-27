import Cliente from './cliente.js';
import CalculoImpuesto from './impuesto.js';

// Referencia al formulario y al div de resultado
const form = document.getElementById('taxForm');
const resultadoDiv = document.getElementById('resultado');

// Manejar el evento "submit" del formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar recargar la página

  // Obtener valores de los campos
  const nombre = document.getElementById('nombre').value;
  const montoBrutoAnual = parseFloat(document.getElementById('montoBruto').value);
  const deducciones = parseFloat(document.getElementById('deducciones').value);

  // Crear una instancia de Cliente
  const cliente = new Cliente(nombre, montoBrutoAnual, deducciones);

  // Calcular el impuesto
  const impuesto = CalculoImpuesto.calcularImpuesto(cliente.montoBrutoAnual, cliente.deducciones);

  // Mostrar el resultado
  resultadoDiv.textContent = `Cliente: ${cliente.nombre}, Impuesto a pagar: $${impuesto.toFixed(2)}`;
});
