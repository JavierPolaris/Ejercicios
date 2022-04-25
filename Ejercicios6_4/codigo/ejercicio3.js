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
document.querySelector('#resultado').innerHTML=resultado;
})