"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Referencia al formulario y al div de resultado
var form = document.getElementById('taxForm');
var resultadoDiv = document.getElementById('resultado');

// Manejar el evento "submit" del formulario
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar recargar la página

  // Obtener valores de los campos
  var nombre = document.getElementById('nombre').value;
  var montoBrutoAnual = parseFloat(document.getElementById('montoBruto').value);
  var deducciones = parseFloat(document.getElementById('deducciones').value);

  // Crear una instancia de Cliente
  var cliente = new _cliente["default"](nombre, montoBrutoAnual, deducciones);

  // Calcular el impuesto
  var impuesto = _impuesto["default"].calcularImpuesto(cliente.montoBrutoAnual, cliente.deducciones);

  // Mostrar el resultado
  resultadoDiv.textContent = "Cliente: ".concat(cliente.nombre, ", Impuesto a pagar: $").concat(impuesto.toFixed(2));
});
