// Crea un array de dos dimensiones (matriz) que contenga números y
// cadenas solicitados al usuario, muestra por pantalla los elementos
// cadena que se encuentren en posiciones fila par y columna impar

// Ej:

// 1       Hola      3
// Adiós   3         2   -> Muestra Hola y Manzana
// 4       Manzana   5
 document.getElementById('boton').addEventListener('click', (e) => {
     e.preventDefault();
    var frase = document.getElementById('entrada').value;
    var nuevaFrase = frase.split(" ");
    let p1 = [];
    let p2 = [];
    let p3 = [];
    let p4 = [];
    let p5 = [];
    let p6 = [];
    let p7 = [];
    let p8 = [];
    let p9 = [];
    let cont = 0;
    for (let i = 0; i < nuevaFrase.length; i++) {
        if (nuevaFrase[i] == nuevaFrase[0]) {
           p1.push(nuevaFrase[0])
           cont++
        }else if (nuevaFrase[i] == nuevaFrase[1]){
            p2.push(nuevaFrase[1])
           cont++
        }else if (nuevaFrase[i] == nuevaFrase[2]){
            p3.push(nuevaFrase[2])
           cont++
        }else if (nuevaFrase[i] == nuevaFrase[3]){
            p4.push(nuevaFrase[3])
           cont++
        }else if (nuevaFrase[i] == nuevaFrase[4]){
            p5.push(nuevaFrase[4])
           cont++
        }else if (nuevaFrase[i] == nuevaFrase[5]){
            p6.push(nuevaFrase[5])
           cont++
        }else if (nuevaFrase[i] == nuevaFrase[6]){
            p7.push(nuevaFrase[6])
           cont++
        }else if (nuevaFrase[i] == nuevaFrase[7]){
            p8.push(nuevaFrase[7])
           cont++
        }else if (nuevaFrase[i] == nuevaFrase[8]){
            p9.push(nuevaFrase[8])
           cont++
        }else{
            alert('Maximo 9 palabras')
        }
    }


var nuevoArray = new Array(3);
nuevoArray[0] = new Array(3);
nuevoArray[1] = new Array(3);
nuevoArray[2] = new Array(3);

//TODO Metemos un dato en cada posición:
nuevoArray[0][0] = p1;
nuevoArray[0][1] = p2;
nuevoArray[0][2] = p3;
nuevoArray[1][0] = p4;
nuevoArray[1][1] = p5;
nuevoArray[1][2] = p6;
nuevoArray[2][0] = p7;
nuevoArray[2][1] = p8;
nuevoArray[2][2] = p9;


document.getElementById('salida').innerText = `los nuemeros son ${nuevoArray[0][1]} y ${nuevoArray[2][1]}`
console.log(`${nuevoArray[0][1]} ${nuevoArray[2][1]}`)
})
// Crea un array a partir de las siguientes instrucciones:
// El tamaño es solicitado al usuario
// Elemento1: 1
// Elemento2: 1
// ElementoN: ElementoN-1 + ElementoN-2

  
  document.getElementById('boton1').addEventListener('click', (e) => {
  let n = document.getElementById('numero').value;
  let arrayNum = [1,1]
  
  for (let i = 2; i <= n; i++) {
    arrayNum[i] = arrayNum [i - 1] + arrayNum[i - 2]
    // array[i] = arrayFib(i + 1);
  }
  document.getElementById('salida1').innerText = `la cadena es ${arrayNum}`

  console.log(arrayNum);
})

// Solicita al usuario un array de máximo 10 números reales y calcula su media.

document.getElementById('boton2').addEventListener('click', (e)=> {
    e.preventDefault();
    let cadena = document.getElementById('numero1').value;
    var nuevoNumero = cadena.split(" ");
    console.log(nuevoNumero)
    let newNum = [];
    nuevoNumero.forEach(element => {
        // let element1 = parseInt(element)
        newNum.push(parseInt(element));
    });
    if (newNum.length <= 10) {
        console.log(newNum)
    
        let suma = newNum.reduce(function(antiguo, nuevo){
            return antiguo + nuevo;
        });
    
        console.log(suma)
        let media = suma / newNum.length;
    
        document.getElementById('salida2').innerText = `la media es ${media}`
    
    console.log(media)
    }else {
        alert('Maximo 10 numeros')
    }
   
})


