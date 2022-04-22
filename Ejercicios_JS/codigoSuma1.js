
document.querySelector('#boton1').addEventListener('click', () => {
    const n1 = parseInt(document.querySelector('#numero1').value);
    const n2 = parseInt(document.querySelector('#numero2').value);


   
         
        resultado = n1 + n2;
        document.querySelector('#resultado2').innerHTML = "suma " + resultado;
        resultado1 = n1 - n2;
        document.querySelector('#resultado3').innerHTML = "resta " + resultado1;
    }

    
);