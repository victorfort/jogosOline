import Cell from './cell.js';
var mostrar = document.querySelector("div#aparece")
// Exemplo de uso   
const cell = new Cell("Valor da célula");
mostrar.innerHTML= cell.render(); // Saída: <td>Valor da célula</td>
