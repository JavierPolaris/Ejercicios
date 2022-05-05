// 6. Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
//    Solicita al usuario una palabra, o un numero y los ordena de forma decreciente.

var ordenAlfabetico = [ 'Me', 'robaste', 'la', 'canoa', 'me', 'volví', 'nadando'];


// Para ordenar con mayúsculas primero te vale con solo ordenAlfabetico.sort();
ordenAlfabetico.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});




document.getElementById("letras").innerHTML = ordenAlfabetico;