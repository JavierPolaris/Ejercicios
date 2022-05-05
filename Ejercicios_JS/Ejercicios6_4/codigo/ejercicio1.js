// 1.Solicita al usuario tres números enteros e indícale cuál es el menor.
// Además debe volver el mayor de esos numeros si la suma de los tres numeros solicitados es menor que 15.

function menor() {
    var n1=document.getElementById('numero1').value;
    var n2=document.getElementById('numero2').value;
    var n3=document.getElementById('numero3').value;
    
   
    if (n1 < n2 && n1 < n3) {
        document.querySelector('#resultado').innerHTML = n1;
    }else if (n2 < n1 && n2 < n3) {
        document.querySelector('#resultado').innerHTML = n2;
    }else if (n3 < n1 && n3 < n2) {
        document.querySelector('#resultado').innerHTML = n3;
    }else if (n1 == n2 && n2 == n3) {
        alert('los 3 numeros introducidos son iguales, pardillo');
    }else{
        console.log('Algo estas haciendo mal')
    };
}
    // n1 = 5
    //n2 = 2
    //n3= 1
      
function mayor() {
    var n1=parseInt(document.getElementById('numero1').value);
    var n2=parseInt(document.getElementById('numero2').value);
    var n3=parseInt(document.getElementById('numero3').value);
console.log(n1);
console.log(n2);
console.log(n3);

    let suma= n1 + n2 + n3;
    console.log(suma);
        if (suma < 15) {
            if (n1 > n2 && n1 > n3) {
                alert('El mayor es el primer numero')
            } else if ( n2>n1 && n2>n3) {
                alert('El mayor es el segundo número')
            } else if (n3>n1 && n3>n2) {
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



// let elMayor= "";
// function cualMayor() {
//     for( let i=0; i <= numeros.length; i++) {
//     if (numeros[i] > numeros[i-1]) {
//         elmayor=numeros[i];
//         }
//     }
//     alert(elMayor);
// }