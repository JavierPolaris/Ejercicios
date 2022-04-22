var operacion;
document.querySelector('#suma').addEventListener('click', () => {
    operacion = '+';
});
document.querySelector('#resta').addEventListener('click', () => {
    operacion = '-';
});

document.querySelector('#boton').addEventListener('click', () => {
    const n1 = parseInt(document.querySelector('#numero1').value);
    const n2 = parseInt(document.querySelector('#numero2').value);

    let resultado;
    if(operacion == '+'){
        resultado = n1 + n2;
    }else if(operacion == '-') {
        resultado = n1 - n2;
    }else{
        alert("que estas haciendo inutil!!!")
    }
    document.querySelector('#resultado').innerHTML = resultado;
});