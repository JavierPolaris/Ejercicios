// function boton() {
//     let cad = "";
//     let n = prompt('Elige un numero de caracteres');
//     for (let i = 0; i < n; i++) {
//       if (i % 3 == 0) {
//           cad += "*"
//       }else if (i % 3 == 1) {
//           cad += "+"
//       } else {
//           cad += "_"
//       }
        
//     }
//     console.log(cad)
// }

// function registro (nombre, dni, email="Sin email", telefono="Sin teléfono") {
//     var datos = [nombre, dni, email, telefono]
//     alert(`Ha sido registrado con los datos:\n ${datos}`);
// }
// registro("Davinia de la Rosa", "11111111A","","645792847");

// Asignar nombres a elementos de objetos pasados por parámetro
// function imprime ([ saludo, hora ]) {
//     console.log(`${saludo}, buenos ${hora}`);
// }
// imprime( ["hola", "dias"] ); //Quita los [] y explica lo que pasa

// const user = {
//     id: 42,
//     is_verified: true
// };

// const {id, is_verified} = user;

// console.log(id); // 42
// console.log(is_verified); // true 

// let miArray = [2, 5, 7, 1, 9];
//     let minimo = Math.min(...miArray);
//     console.log(minimo);

// let misConocimientos = ['variables', 'operadores', 'estructuras de control', 'funciones'];
// let aprendido = ['spread', 'local storage'];
// let misConocimientosAmpliados = [...misConocimientos, ...aprendido, 'otra cosa más'];
// console.log(misConocimientosAmpliados);


// const user1 = { 
//     name: 'Jen', 
//     age: 22, 
// }; 

// const user2 = { 
//     name: "Andrew", 
//     location: "Philadelphia" 
// }; 

// const mergedUsers = {...user1, ...user2}; 
// console.log(mergedUsers)

// function operacion (x, y, ...a) {
//     return (x + y) * a.length
    
// }

// console.log(operacion(1,2,3,4));//6


// function sum(...a) {
//     return a.reduce((previous, current) => {
//         return previous + current;
//     });
// }

// console.log(sum(1, 2, 3)); //6

// console.log(sum(1, 2, 3, 4)); //10

// let nombre = 'antonio';
// var promise = new Promise((resolve,reject) => {
    
//     if(nombre !== 'Pedro') reject(`Lo siento el nombre no es ${nombre}`);
//     else resolve (nombre)
// })



// promise.then((resultado)=> {
//     console.log(resultado) 
// }).catch((e)=> {
//     console.log(e)
// })
document.getElementById('buscar').addEventListener('click', (e) => {
    e.preventDefault();
    let usuario = document.getElementById('usuario').value;
    
            fetch(`https://api.github.com/users/${usuario}`)
        .then(res=>res.json())
        .then(json=>document.getElementById('salida').innerHTML = `<br>El usuario es: <b>${json.login}</b>.<br> Los numeros de repositorios son: <b>${json.public_repos}</b>.<br> La imagen de avatar es: <b>${json.avatar_url}</b>.`);
    


 


})
