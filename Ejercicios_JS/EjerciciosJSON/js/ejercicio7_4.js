// TODO Ejercicio 7_4
// TODO Solicita una cadena al usuario e indica la cantidad de veces
// TODO que aparece la a en las palabras impares


document.getElementById('boton1').addEventListener('click', (e) => {
    e.preventDefault();
    

    let cadena = document.getElementById('entrada6').value;
    let nuevaCadena = cadena.split(" ")
    var cont = 0
    var letra = "a"
    for (let i = 0; i < nuevaCadena.length; i++) {
        if(nuevaCadena[i].length%2==1){
            var impar = nuevaCadena[i]
            for (let j = 0; j < impar.length; j++) {
                if(impar[j] == letra){
                    cont++
                }
            }
        }
    }
    console.log(cont)
    document.getElementById('salida1').innerText = cont
 


});



// Todo Solicita una cadena al usuario y devuélvela invertida
// TODO Ej: "Hola, ¿qué tal estás?" -> estás? tal ¿qué Hola,

document.getElementById('boton2').addEventListener('click', (e) => {
    e.preventDefault();
    

    let cadena1 = document.getElementById('entrada7').value;
let newCadena = [];
function invertir(cadena1) {
    let array = cadena1.split(' ');
    let larga = array.length;

    for (let i = 0; i < larga; i++) {
        newCadena.push(array.pop());
        
    }

    return newCadena.join(' ');
}


console.log(invertir(cadena1))
document.getElementById('salida2').innerText = invertir(cadena1)

});