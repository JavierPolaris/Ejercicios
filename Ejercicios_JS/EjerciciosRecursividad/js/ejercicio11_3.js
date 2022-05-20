// Realiza la serie de fibonacci (1, 1, 2, 3, 5, 8, 13...) usando una función recursiva en Javascript

function fibonacci(posicion) {
    if(posicion==1 || posicion == 2){
        return 1;
    }
     return  fibonacci(posicion-1) + fibonacci(posicion-2)
    
}

// Realiza la suma de todos los elementos de un array numérico,
// usando una función recursiva en Javascript

const arrayNumeros = [1, 1, 2, 2,3,5,7]
function suma(arrayNumeros,tam) {
    if (tam == 1) {
         return arrayNumeros[0]
    } else {
         return arrayNumeros[tam-1]+suma(arrayNumeros,tam-1)
    }
}
console.log(suma(arrayNumeros,arrayNumeros.length))