//--------------------- Ejercicio 1

//Funcion clásica
function menor() {
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var n3 = document.getElementById('numero3').value;


    if (n1 < n2 && n1 < n3) {
        document.querySelector('#resultado1').innerHTML = n1;
    } else if (n2 < n1 && n2 < n3) {
        document.querySelector('#resultado1').innerHTML = n2;
    } else if (n3 < n1 && n3 < n2) {
        document.querySelector('#resultado1').innerHTML = n3;
    } else if (n1 == n2 && n2 == n3) {
        alert('los 3 numeros introducidos son iguales, pardillo');
    } else {
        console.log('Algo estas haciendo mal')
    }; 
}

//Función clasica
function mayor() {
    var n1 = parseInt(document.getElementById('numero1').value);
    var n2 = parseInt(document.getElementById('numero2').value);
    var n3 = parseInt(document.getElementById('numero3').value);
    console.log(n1);
    console.log(n2);
    console.log(n3);

    let suma = n1 + n2 + n3;
    console.log(suma);
    if (suma < 15) {
        if (n1 > n2 && n1 > n3) {
            alert('El mayor es el primer numero')
        } else if (n2 > n1 && n2 > n3) {
            alert('El mayor es el segundo número')
        } else if (n3 > n1 && n3 > n2) {
            alert('El mayor es el tercer número')
        }
        else if (n1 == n2 && n2 == n3) {
            alert('los 3 numeros introducidos son iguales, pardillo');
        }
        else {
            alert('La suma es superior a 15, no se puede calcular')
        }

    }


};

//--------------->Final Ejercicio 1

//----------------Ejercicio 2

//Funcion Flecha

document.getElementById('boton').addEventListener('click', (e) => {
    e.preventDefault();
    var cadena = document.getElementById('frase').value;
    var letraA = document.getElementById('a').checked;
    var letraB = document.getElementById('b').checked;
    var letraC = document.getElementById('c').checked;
    var letraD = document.getElementById('d').checked;
    var letraE = document.getElementById('e').checked;
    var letraF = document.getElementById('f').checked;
    var letraG = document.getElementById('g').checked;
    var letraH = document.getElementById('h').checked;
    var letraI = document.getElementById('i').checked;
    var letraJ = document.getElementById('j').checked;
    var letraK = document.getElementById('k').checked;
    var letraL = document.getElementById('l').checked;
    var letraM = document.getElementById('m').checked;
    var letraN = document.getElementById('n').checked;
    var letraÑ = document.getElementById('ñ').checked;
    var letraO = document.getElementById('o').checked;
    var letraP = document.getElementById('p').checked;
    var letraQ = document.getElementById('q').checked;
    var letraR = document.getElementById('r').checked;
    var letraS = document.getElementById('s').checked;
    var letraT = document.getElementById('t').checked;
    var letraU = document.getElementById('u').checked;
    var letraV = document.getElementById('v').checked;
    var letraW = document.getElementById('w').checked;
    var letraX = document.getElementById('x').checked;
    var letraY = document.getElementById('y').checked;
    var letraZ = document.getElementById('z').checked;




    var resultado = [];

    if (letraA) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'a') resultado.push(i);
        };
    } else if (letraB == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'b') resultado.push(i);
        };
    } else if (letraC) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'c') resultado.push(i);
        };
    } else if (letraD == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'd') resultado.push(i);
        };
    } else if (letraC == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'c') resultado.push(i);
        };
    } else if (letraD == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'd') resultado.push(i);
        };
    } else if (letraE == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'e') resultado.push(i);
        };
    } else if (letraF == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'f') resultado.push(i);
        };
    } else if (letraG == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'g') resultado.push(i);
        };
    } else if (letraH == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'h') resultado.push(i);
        };
    } else if (letraI == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'i') resultado.push(i);
        };
    } else if (letraJ == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'j') resultado.push(i);
        };
    } else if (letraK == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'k') resultado.push(i);
        };
    } else if (letraL == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'l') resultado.push(i);
        };
    } else if (letraM == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'm') resultado.push(i);
        };
    } else if (letraN == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'n') resultado.push(i);
        };
    } else if (letraÑ == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'ñ') resultado.push(i);
        };
    } else if (letraO == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'o') resultado.push(i);
        };
    } else if (letraP == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'p') resultado.push(i);
        };
    } else if (letraQ == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'q') resultado.push(i);
        };
    } else if (letraR == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'R') resultado.push(i);
        };
    } else if (letraS == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 's') resultado.push(i);
        };
    } else if (letraT == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 't') resultado.push(i);
        };
    } else if (letraU == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'u') resultado.push(i);
        };
    } else if (letraV == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'v') resultado.push(i);
        };
    } else if (letraW == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'w') resultado.push(i);
        };
    } else if (letraX == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'x') resultado.push(i);
        };
    } else if (letraY == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'y') resultado.push(i);
        };
    } else if (letraZ == true) {
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toLowerCase() === 'z') resultado.push(i);
        };
    }
    document.querySelector("#resultado3").innerHTML = resultado.length;

});

//------------------>Final ejercicio 2


// -----------Ejercicio 3

// Función expresión
var operacion1 = document.getElementById('plus').addEventListener('click', (e) => {
    e.preventDefault();
    operacion1 = '+';
});
// Función expresión
var operacion2 = document.getElementById('minus').addEventListener('click', (e) => {
    e.preventDefault();
    operacion2 = '-';
});
document.getElementById('answer').addEventListener('click', (e) => {
    e.preventDefault();
    var n1 = parseInt(document.getElementById('primerNumero').value);
    var n2 = parseInt(document.getElementById('segundoNumero').value);

    var resultado; 
    if (operacion1) {
        resultado = n1 + n2;

    } else if (operacion2) {
        resultado = n1 - n2;

    } else {
        alert('NO HAS ELEGIDO OPERACIÓN!!!')
    }

    if (n1 == n2) {

        var nombre = window.prompt('Introduce tu nombre')
        alert(`Tu nombre tiene ${nombre.length} caracteres`)

    }


    document.querySelector('#resultado').innerHTML = resultado;
})

//------------------>Final ejercicio 3

// -----------Ejercicio 4
let intentos = 0;

const clave1 = 'lolo@gmail.com';
const usuario1 = '1234';


document.getElementById('login').addEventListener('click', (evt) => {
    const usuario = document.getElementById('email');
    const clave = document.getElementById('password');
    valido = document.getElementById('campoOK')


    if (intentos >= 3) {
        return;
    }

    if (usuario == usuario1 && /^\d+$/g.test(value)) {
        valido.innerText = "válido";
        intentos = 0;

    } else {
        intentos++;
        valido.innerText = `incorrecto, intentos:  ${intentos} de 3`;

        if (intentos >= 3) {
            valido.innerText = "Nunca mas vas a poder intentar";
        }
    }
});


//------------------>Final ejercicio 4

// -----------Ejercicio 5

document.getElementById('resultado4').addEventListener('click', (e) => {
    e.preventDefault();
    var letra = document.getElementById('letra').value;

    let valor = [];
    if (letra == 'a') {
        valor = 7;
        document.querySelector('#valor').innerHTML = valor;
    } else if (letra == 'b') {
        valor = 9;
        document.querySelector('#valor').innerHTML = valor;
    } else if (letra == 'c') {
        valor = 101;
        document.querySelector('#valor').innerHTML = valor;
    } else {
        alert('se ha equivocado de letra: Solo "A","B","C"');
    }
});

//------------------>Final ejercicio 5

// -----------Ejercicio 6

document.getElementById('ordenar').addEventListener('click', (e) => {
    e.preventDefault();
    var frase = document.getElementById('orden').value;
    var arr = frase.split(' ');
    console.log(arr)

    let aux;
    for (let i = 0; i <= arr.length; i++) {
        for (let x = 0; x <= arr.length; x++) {
            if (frase[x] > arr[x + 1]) {
                aux = arr[x + 1];
                arr[x + 1] = arr[x];
                arr[x] = aux;
            }
        }
    }
    console.log(arr);
    document.getElementById("letras").innerHTML = arr;

})

//------------------>Final ejercicio 6

// -----------Ejercicio 7


document.getElementById('botonEn').addEventListener('click', (e) => {
    e.preventDefault();
    var cadena = document.getElementById('entero').value;

    var newCadena = [];
    var contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] != '-') {
            newCadena.push(i);
            console.log(newCadena.length)
            document.getElementById("enteros").innerHTML = newCadena.length;
        } else if (cadena[i] == '-') {
            cadena.slice(1);
            console.log(cadena.length)
            document.getElementById("enteros").innerHTML = cadena.length;
        } else {
            alert('algo estas haciendo mal')
        }

    }

})


//------------------>Final ejercicio 7

// -----------Ejercicio 8

document.getElementById('botonCad').addEventListener('click', (e) => {
    e.preventDefault();
    var cadena = document.getElementById('number').value;


    let resultado1 = '';
    for (let i = 1; i <= cadena; ++i) {

        resultado1 += '* ';

    }
    document.getElementById('cadena').innerHTML = resultado1

});

//------------------>Final ejercicio 8

// -----------Ejercicio 9  
document.getElementById('carac').addEventListener('click', (e) => {
    e.preventDefault();
    var cant = document.getElementById('number1').value;

    
        let cad = "";
        let n;
        for (let i = 0; i < cant; i++) {
            n = i % 3;
            if (n == 0) {
                cad = cad +"*";
            } else if (n == 1) {
                cad = cad +"+";
            } else {
                cad = cad +"_";
            }
        }
       document.getElementById('cadena1').innerHTML = cad;
    

})

//------------------>Final ejercicio 9

// -----------Ejercicio 10

document.getElementById('arbol').addEventListener('click', (e) => {
    e.preventDefault();
    var arb = document.getElementById('number2').value;
    var arbol = '';
    for (let i = 1; i <= arb; i++) {
        
        for (let j = 1; j <= i; j++) {
            arbol += '* ';
        
            
        };
        arbol += "\n";
        // console.log(arbol)
        
       
    }

    alert (arbol);
})
//------------------>Final ejercicio 10

// -----------Ejercicio 11

document.getElementById('dias').addEventListener('click', ()=> {
    let entrada = document.getElementById('entrada').value;
    let salida = document.getElementById('salida').value;
   


    let entradaOb = new Date(entrada)
    let salidaOb = new Date(salida)

    let diferencia = entradaOb - salidaOb;

    let difeDi = diferencia / (1000*60*60*24);
    
   let convertString = difeDi.toString();
   
    let magic = [];
    for (let i = 0; i < convertString.length; i++) {
         if(convertString[i] == "-"){
           
           convertString.replace('-')
        }else{
            magic.push(convertString[i])
        }
        }
       
        let resultado = magic.toString()
        console.log(resultado.replace(/,/g,''));
       
        document.getElementById('fecha').innerHTML = resultado.replace(/,/g,'');
})




//------------------>Final ejercicio 11

// -----------Ejercicio 12

//pasar de mayusculas a minusculas

// function minusculas(frase){
//     let resultado = '';
//     for (letra of frase) {
//         letra = String.fromCharCode(letra.charCodeAt() + ('a'.charCodeAt()- 'A'.charCodeAt()));
//         resultado += letra;
//         console.log(resultado);
        
//     }
// }
// minusculas('ESTA ES LA FRASE');







