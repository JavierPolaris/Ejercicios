//TODO Ejercicio 7_3
//TODO Utilizando objetos Boolean realiza un programa que indique si un array de 6 elementos solicitado al usuario se encuentra ordenado de la siguiente forma (e1 > e3, e2 < e4 y e5 = e6)
document.getElementById('boton').addEventListener('click', (e) => {
    e.preventDefault();

    var entrada = document.getElementById('entrada').value;
    var entrada1 = document.getElementById('entrada1').value;
    var entrada2 = document.getElementById('entrada2').value;
    var entrada3 = document.getElementById('entrada3').value;
    var entrada4 = document.getElementById('entrada4').value;
    var entrada5 = document.getElementById('entrada5').value;
    var numeros= [];
     numeros.push(entrada);
     numeros.push(entrada1);
     numeros.push(entrada2);
     numeros.push(entrada3);
     numeros.push(entrada4);
     numeros.push(entrada5);

    
    console.log(numeros)
    // var array = [4,2,1,5,7,7];
    var boll = new Boolean(numeros[0] > numeros[2]);
    var boll1 = new Boolean(numeros[1] < numeros[3]);
    var boll2 = new Boolean(numeros[4] == numeros[5]);

    if (boll.valueOf() && boll1.valueOf() && boll2.valueOf()) {
        console.log("Esta ordenado")
    } else {
        console.log('todo mal')
    }

})