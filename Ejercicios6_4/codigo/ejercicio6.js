var ordenAlfabetico = [ 'Me', 'robaste', 'la', 'canoa', 'me', 'volví', 'nadando'];


// Para ordenar con mayúsculas primero te vale con solo ordenAlfabetico.sort();
ordenAlfabetico.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});




document.getElementById("letras").innerHTML = ordenAlfabetico;