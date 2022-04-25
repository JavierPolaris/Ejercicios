


document.getElementById('resultado').addEventListener('click', (e) => {
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
        alert('se ha equivocado de letra');
    }
});