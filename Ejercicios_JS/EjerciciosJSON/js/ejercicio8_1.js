// Formulario de contacto - Local Storage
// Crear un formulario de contacto con los siguientes campos:
// Nombre
// Email
// Mensaje
// Guardar en Local Storage los datos de contacto enviados de cada usuario
// Mostrar los datos de los contactos guardados usando herramientas de DOM
// Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave
let contador = 0;

document.getElementById('boton').addEventListener('click', (e) => {
    e.preventDefault();
    let email =  document.getElementById('email').value;
    // `usuario_${contador}`
    
    localStorage.setItem(`usuario_${contador}`, JSON.stringify({
        nombre : document.getElementById('nombre').value,
        email :  document.getElementById('email').value,
        mensaje :  document.getElementById('mensaje').value
        
    }))
    contador++
 

})

// Borrar Item
document.getElementById('boton1').addEventListener('click', (e) => {
    e.preventDefault();
   
//TODO esto es para entrar
     let valorInput = document.getElementById('borrarItem').value;

    // var user = JSON.parse(localStorage.getItem(valorInput)).nombre;
    // console.log(user)



    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(`${JSON.parse(localStorage.getItem(key)).email}`);
       if (`${JSON.parse(localStorage.getItem(key)).email}` == valorInput) {
        localStorage.removeItem(key)
       }
    }
    // for (let i = 0; i < user.length; i++) {
    //     let mierda = user[i];
    //     console.log(mierda.length)
        
    // }
    // localStorage.removeItem(document.getElementById('borrarItem').value)
   
    

});


//Borrar Todo
document.getElementById('boton2').addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.clear();


})










// Avanzado - Local Storage
// Crea botón para borrar todos los contactos guardados en Local Storage
// Crea botón para borrar un contacto en concreto de Local Storage, buscando por email