
function add() {
    var n1=document.getElementById('numero1').value;
    var n2=document.getElementById('numero2').value;
    var n3=document.getElementById('numero3').value;
    // console.log(n1);
    // console.log(n2);
    // console.log(n3);
    if (n1 > n2 && n1 > n3) {
        document.querySelector('#resultado').innerHTML = n1;
    }else if (n2 > n1 && n2 > n3) {
        document.querySelector('#resultado').innerHTML = n2;
    }else if (n3 > n1 && n3>n2) {
        document.querySelector('#resultado').innerHTML = n3;
    }else{
        console.log('Algo estas haciendo mal')
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