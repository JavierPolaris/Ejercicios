// Realiza un programa en JS que permita al usuario insertar una cadena y valide su formato, usando expresiones regulares. Las condiciones de la cadena son:
// Empieza por un número impar
// Luego tiene un "(" y un "$"
// A continuación tiene hasta tres mayúsculas
// Por último una minúscula
// La cadena puede estar dentro de otra.
document.getElementById('btn').addEventListener('click', (e)=>{
    e.preventDefault();

    let cadena = document.getElementById('cadena').value;

    const regExp = new RegExp(/^([13579]{1})([(][$])([A-Z]{1,3})([a-z]{1})$/);

    const resultado = regExp.test(cadena);

    console.log(resultado)



})

// Modifica el ejercicio anterior para que la cadena empiece y termine exactamente como se indica.

// TODO    /^([13579]{1})([(][$])([A-Z]{1,3})([a-z]{1})$/


// Modifica el ejercicio anterior para que las 4 letras puedan ser mayúsculas o minúsculas.

// TODO    /^([13579]{1})([(][$])([A-Z]{1,3})([a-z]{1})$/i


// Realiza un formulario en el que el usuario inserte DNI, teléfono y email y valida el formato de los mismos.

// Formato DNI: 8cifras-1letra
// Formato teléfono: +34-xxxxxxxxx
// Formato email: letras@letras.3letras
// Además añade la validación de la letra del DNI, que se debe corresponder con el número según el algoritmo de la policía nacional.
document.getElementById('btn1').addEventListener('click', (e)=>{
    e.preventDefault();

    let dni = document.getElementById('dni').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    

    const dniExp = new RegExp(/^\d{8}(-[a-z])$/i);
    const telExp = new RegExp(/^([+]{1})(34{1})(-\d{9})$/);
    const emailExp = new RegExp(/^([\d\w_\.-]+)@([\d\w\.-]+)\.([\w\.]{3})$/)

    const resultadoDni = dniExp.test(dni);
    const resultadoTel = telExp.test(telefono);
    const resultadoEmail = emailExp.test(email);

    console.log(`El DNI es: ${resultadoDni}`)
    console.log(`El Telefono es: ${resultadoTel}`)
    console.log(`El Email es: ${resultadoEmail}`)
    


    let letr;
    let letra;
    let numero;
    if(resultadoDni == true) {
    numero = dni.slice(0,dni.length-1);
    letr = dni.slice(dni.length-1,1);
    numero = numero % 23;
    letra='TRWAGMYFPDXBNJZSQVHLCKET';
    letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
        alert('Dni erroneo, la letra del NIF no se corresponde');
      }else{
        alert('Dni correcto');
      }
   }else{
      alert('Dni erroneo, formato no válido');
    }
    



})