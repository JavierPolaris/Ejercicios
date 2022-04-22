var boton = document.getElementById("añadir");
var input = document.getElementById("fruta");
var listafunc = document.querySelector("ul");
var botonDelete = document.getElementById("borrar");


boton.addEventListener("click", function () {
  var nuevoli = document.createElement("li");
  var textoli = document.createTextNode(input.value);
  nuevoli.appendChild(textoli);
  listafunc.appendChild(nuevoli);
});

function remove_child() {
  var list = document.getElementById('list');
  var item = listafunc.lastElementChild;
  list.removeChild(item);
}