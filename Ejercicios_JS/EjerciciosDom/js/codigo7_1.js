// Se solicita:

// Número de enlaces de la página
let enlaces = document.getElementsByTagName('a');
console.log(enlaces.length);
// Dirección a la que enlaza el penúltimo enlace
var lastenlaces = enlaces[5];
console.log(lastenlaces.href);
// Numero de enlaces que enlazan a http://prueba
var numPrueba = "";
var num = 0;
for (let i = 0; i < enlaces.length; i++) {
    numPrueba = enlaces[i].href;
    if (numPrueba == 'http://prueba/') {
            num++;   
        }
}
console.log(num)
// Número de enlaces del tercer párrafo
var parrafo = document.getElementsByTagName('p')[2];
var enl = parrafo.getElementsByTagName('a').length;
console.log(enl)


// AYUDA: Si queremos acceder al contenido de un atributo de un nodo elemento es suficiente con usar
// nodo.atributo (ej: p.id accede al contenido del id del nodo almacenado en p)