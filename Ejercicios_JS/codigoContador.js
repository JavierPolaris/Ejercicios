document.querySelector("#boton1").addEventListener('click', () => {
    var cadena = document.querySelector('#frase').value;
    
    var indices = [];
    for(var i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === "a") indices.push(i);
    }
    
    document.querySelector("#resultado").innerHTML = indices.length;
    
    });
    
    
    