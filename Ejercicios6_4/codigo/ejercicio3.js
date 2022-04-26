// 3. Suma o resta (según elija el usuario) dos números reales
// SI fueran iguales los numeros, pedirle al usuario el nombre y devolverle la cantidad de letras que tiene su nombre.

var operacion;
document.getElementById('plus').addEventListener('click', (e)=> {
    e.preventDefault();
    operacion = '+';
});

document.getElementById('minus').addEventListener('click', (e)=>{
    e.preventDefault();
    operacion='-';
});
document.getElementById('answer').addEventListener('click', (e)=> {
    e.preventDefault();
    var n1 = parseInt(document.getElementById('primerNumero').value);
    var n2 = parseInt(document.getElementById('segundoNumero').value);
    
    var resultado;
    if (operacion == '+') {
        resultado=n1+n2;
    
    }else if (operacion == '-') {
        resultado=n1-n2;
   
    } else {
        alert('NO HAS ELEGIDO OPERACIÓN!!!')
    }

    if (n1==n2) {
      
       var nombre=window.prompt('Introduce tu nombre')
       alert(`Tu nombre tiene ${nombre.length} caracteres`)
       
    }
 

document.querySelector('#resultado').innerHTML=resultado;
})