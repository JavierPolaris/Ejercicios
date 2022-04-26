// 4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
// En caso de error en el usuario O en el password devolver mensaje de error: "Datos incorrectos".
// En caso de que gastar todos los intentos dar un mensaje de  : "En 15 minutos podrás volver a loguearte".

var btn = document.getElementById('login');
var clave = document.getElementById('password');
var usuario = document.getElementById('email');

/* evt.preventDefault() 
como su nombre lo indica previene o cancela el evento si es que fuera cancelable en este caso 
el submit lo es y retorno un false para que no siga ejecutando la estructura del if*/

btn.addEventListener('click', (evt) => {
    evt.preventDefault();

    for (let i = Math.ceil(Math.random() * 3); i > 0; i--){
        alert(`Tienes ${i} intentos para el Login`);

      if(clave.value === '1234' && usuario.value === 'Lolo@gmail.com') {
      	console.log('Estas logeado')
          return true;

      }else if(clave.value === ''){
          console.log('el campo contraseña es obligatorio')
          evt.preventDefault();
          return false;
      
      }else if(clave.value === '' > 1 || 3){
        
        console.log('Demasiados errores tienes que esperar 20min')
        evt.preventDefault();
        return false;
    
    }else if(usuario.value === ''){
      
      console.log('el campo de usuario es obligatorio')
          evt.preventDefault();
          return false;
      
      }

    
    }


    });

















// document.getElementById('login').addEventListener('click', (e) => {
//         evt.preventDefault();
//         var email1 = document.getElementById('email').value;
//         var password1 = document.getElementById('password').value;


// const email = "mariloli@gmail.com";
// const password = "1234";

//     for (let n = 3; n > 0; n--) {
//         alert(`Tienes ${n} intentos`);
        
        
//         if (email === email1 && password === password1) {
//             alert("Usuario y contraseña correctos.");
//             n = 0;
//         } else {
//             alert("Usuario y contraseña incorrectos");

//         }
//     }
// }
// );






// document.getElementById('login').addEventListener('click', (e) => {
//     evt.preventDefault();
//     var email1 = document.getElementById('email').value;
//     var password1 = document.getElementById('password').value;

//     var email = 'juan@gmail.com';
//     var password = '1234';
//     var intentos = 1;
//     var maximo = 3;

//     if(clave.value === '1234' && usuario.value === 'juan@gmail.com') {
//         return true;

//     }else if(clave.value === ''){
//         console.log('el campo contraseña es obligatorio')
//         evt.preventDefault();
//         return false;
    

    // for (let n = Math(Math * 3); n > 0; n--){
    //     alert(`Tienes ${n} intentos para el Login`);
    // if (email1 == email && password1 == password) {
    //     alert('te has logeado!!');
    // }else{
    //     alert('datos introducidos erroneos')
    // }



// }};