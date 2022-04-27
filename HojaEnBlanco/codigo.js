// Realiza una página en HTML, que disponga de dos botones, uno de ellos tendrá el texto "Saludar"
// y al pulsarlo nos indicará "Hola!!"; el segundo tendrá el texto "Despedir", al pulsarlo nos dirá "Adiós!!".
// Para dar funcionalidad a los botones debes usar JavaScript.
// function Saludar() {
//     alert('Hola!!')
// }
// function Despedir() {
//     alert('Adiós!!')
// }


// ejercio 2
// Realiza una página en HTML, que disponga de dos botones, uno de ellos tendrá el texto "Añadir"
// y al pulsarlo insertará una fruta nueva en el array de frutas de nuestro ejemplo y le mostratá
// el array al usuario; el otro tendrá el texto "Borrar" y eliminará la última fruta del array
// y volverá a mostrarlo.
    
// var frutas = ['Manzana','Pera','Fresa',]

// var fruta;
//     function añadir() {
//         fruta = prompt('Inserta fruta')
//         // console.log(fruta)
//         frutas.push(fruta)
//         alert(frutas)

//     }


//  var ultimo;
//     function borrar() {
//         ultimo = frutas.pop();
//         alert(frutas)
//     }



// ejercio 3    
// var n = window.prompt("Inserta un número entero: ");
// alert(n+n+2);
// // esto devuelve el numero entero para poder sumarlo
// n = parseInt(n); 
// alert(n+n+2);
// var n2 = window.prompt("Inserta un número real: ");
// alert(n2+n2+2);
// // esto devuelve el decimal y permite sumarlo
// n2 = parseFloat(n2);
// alert(n2+n2+2);


// ejercicio 4
// const n = 9;
//     var n2 = prompt("Inserta un número");
//     if (n == n2) {
//         alert("Has acertado el número");
//     } else {
//         alert("No has acertado el número");
//     }


// ejercicio 5
    //Comprobar si el usuario acierta el 9 y si lo hace, si el 9 es múltiplo de 3
    // const n = 9;
    // var n2 = prompt("Inserta un número");
    // if (n == n2) {
    //     alert("Has acertado el número");
    //     if(n % 3 == 0){
    //         alert("Es múltiplo de 3");
    //     }
    // } else {
    //     alert("No has acertado el número");
    // }

// ejercicio 6
    //Comprobar si el usuario acierta el 9 y si el 9 es multiplo de 3 (a la vez)
    // const n = 9;
    // var n2 = prompt("Inserta un número");
    // if (n == n2 && n %3 == 0) {
    //     alert("Has acertado el número y es multiplo de 3");
    // } else {
    //     alert("No has acertado el número");
    // }    

// ejercicio 7

//  //Comprobar si el usuario acierta el 9 y si no lo acierta, si el número insertado es múltiplo de 3
// const n = 9;
// var n2 = prompt("Inserta un número");
// if (n == n2) {
//     alert("Has acertado el número");
// } else {
//     if (n2 % 3 == 0) {
//         alert("No has acertado el número, pero has insertado un número multiplo de 3");
//     }
// }    

// ejercicio 8

// var foo = 0;
// switch (foo) {
// case -1:
//     console.log('1 negativo');
//     break;
// case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
//     console.log(0)
//     // NOTA: el "break" olvidado debería estar aquí
// case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
//     console.log(1);
//     break; // Al encontrar un "break", no será ejecutado el 'case 2:'
// case 2:
//     console.log(2);
//     break;
// default:
//     console.log('default');
// }

// ejercicio 9

// //Muestra los números del 0 al 9
// for (let i = 0; i < 10 ; i = i + 1) {
//     console.log(i);
// }
// //Muestra los números del 1 al 10
// for (let i = 1; i <= 10 ; i = i + 1) {
//     console.log(i);
// }
// //Muestra los números del 1 al 10 con operador de post incremento
// for (let i = 1; i <= 10 ; i++) {
//     console.log(i);
// }
// //Muestra los números pares que hay entre 1 y 10
// for (let i = 2; i <= 10 ; i=i+2) {
//     console.log(i);
// }

// ejercicio 10

// Solicita al usuario tres números enteros e indícale cuál es el menor.

// var n1 = window.prompt('Introduce el primer numero');
// var n2 = window.prompt('Introduce el segundo numero');
// var n3 = window.prompt('Introduce el tercero numero');

// if(n1 <= n2 && n1 <= n3) {
//     alert(`El menor es: ${n1}`)
// }else if(n2 <= n1 && n2 <= n3){
//     alert(`El menor es: ${n2}`)
// }else if (n3 <= n2 && n3 <= n1){
//     alert(`El menor es: ${n3}`)
// }else{
//     alert('Algo estas haciendo mal')
// }


// ejercicio 11
//Logear usuarios y almacenar la info para luego pulsar un boton y ordenar en pantalla
// los mails ordenados alfabeticamente
// var email = [];
// var pass = [];
// var usuario = [];
// document.getElementById('log').addEventListener('click', () => {
    

//     email.push(document.getElementById('email').value) 
//     pass.push(document.getElementById('password').value)
//     usuario.push( document.getElementById('usuario').value);

//     document.getElementById('logeado').innerHTML = `Estas logeado`
    
// })

// console.log(email)

// var email = [];
// document.getElementById('ordenar').addEventListener('click', () => {
    
    
//     document.getElementById('logeado').innerHTML = `Esta ordenado ${email.sort()}`
// })


// ejercicio 12
// Solicita al usuario una frase y una letra y muestra la cantidad de veces
// que aparece la letra en la frase.

// var frase = window.prompt('Introduce una frase').toLocaleLowerCase();
// var letra = window.prompt('introduce una letra').toLocaleLowerCase()[0];

// var cont = 0;

// for (let i = 0; i < frase.length; i++) {
//     if (letra == frase.charAt(i)) {
//         cont++;
//     }
    
// }
// alert(`La letra ${letra} aparece en tu frase: ${cont} veces.`)


// ejercicio 13
// Suma o resta (según elija el usuario) dos números reales
// var n1 = parseFloat(prompt('Introduce un numero con decimales'));
// var n2 = parseFloat(prompt('Introduce otro numero con decimales'));
// var op = prompt('Escribe un "-" para restar o un "+" para sumar')

// if (op === '+') {
//     alert(`el resultado es: ${n1+n2}`)
// }else if(op === '-') {
//     alert(`el resultado es: ${n1-n2}`)
// }else{
//     alert('Algo estas haciendo mal pardillo')
// }

// ejercicio 14
// Almacena en dos variables datos de validación (usuario y contraseña) correctos
//  y permite que el usuario valide (dispone de 3 intentos)

// const user = 'Javi';
// const pass = '1234';
// var user1;
// var pass1;
// var cont = 3;
// do {
//     user1 = prompt('Introduce Usuario');
//     pass1 = prompt('Introduce contraseña');
//     cont--;
// } while ((user1 != user || pass1 != pass) && cont > 0);

// if (user1 == user && pass1 == pass) {
//             alert('Estas Logeado')
//         }else{
//             alert('No te quedan mas intentos')
//         }


// ejercicio 15
// Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9,
// si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra


// var letra = prompt('Inserta una letra').toLocaleLowerCase()[0];
// switch (letra) {
//     case 'a':
//         alert(`la letra "a" vale: 7`)
//         break;
//     case 'b':
//         alert(`la letra "b" vale: 9`)
//         break;
//     case 'c':
//         alert(`la letra "b" vale: 101`)
//         break;

//     default:
//         alert('Te has equivocado de letra')
//         break;
// }

// ejercicio 16
// Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja


// var frase = ['mariflor','cantinflas','sordo','nerds','porra','seis','mierda'];
// var aux;

// for (let i = 1; i < frase.length; i++) {
//     for (let n = 0; n < frase.length -1; n++) {
//         if(frase[n] > frase[n+1]){
//             aux = frase[n];
//             frase[n] = frase[n+1];
//             frase[n+1] = aux;
//         }
        
//     }
    
// }
// alert(frase)