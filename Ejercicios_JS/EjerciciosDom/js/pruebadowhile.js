

const clave1 = 'lolo@gmail.com';
const usuario1 = '1234';

let intentos = 0;
document.getElementById('login').addEventListener('click', (evt) => {
    do {
    const usuario = document.getElementById('email');
    const clave = document.getElementById('password');
    valido = document.getElementById('campoOK')


    if (intentos >= 3) {
        return;
    }

    if (usuario == usuario1) {
        valido.innerText = "válido";
        intentos = 0;

    } else {
        intentos++;
        valido.innerText = `incorrecto, intentos:  ${intentos} de 3`;

        if (intentos >= 3) {
            valido.innerText = "Nunca mas vas a poder intentar";
        }
    }
}while (intentos >= 3) 
});