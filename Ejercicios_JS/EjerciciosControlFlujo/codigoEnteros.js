document.querySelector("#boton1").addEventListener('click', () => {
    var cadena = parseInt(document.querySelector('#frase').value);
    
    var indices = [];
    if (cadena % 2 === 0) {
        document.querySelector("#resultado").innerHTML = indices + (" Es PAR");
    }else {
        document.querySelector("#resultado").innerHTML = indices + (" Es INPAR");

    }
    
    
    
    });
    
    
    