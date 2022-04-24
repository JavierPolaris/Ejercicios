

var btn = document.getElementById('button');
var clave = document.getElementById('password');
var usuario = document.getElementById('email');

/* evt.preventDefault() 
como su nombre lo indica previene o cancela el evento si es que fuera cancelable en este caso 
el submit lo es y retorno un false para que no siga ejecutando la estructura del if*/

btn.addEventListener('click', function(evt){

      if(clave.value === '1234' && usuario.value === 'Lolo@gmail.com') {
          return true;

      }else if(clave.value === ''){

      
        
          console.log('el campo contraseña es obligatorio')
          evt.preventDefault();
          return false;
      
      }else if(clave.value === '' > 1 || 5){
        
        console.log('Demasiados errores tienes que esperar 20min')
        evt.preventDefault();
        return false;
    
    }else if(usuario.value === ''){
      
      console.log('el campo de usuario es obligatorio')
          evt.preventDefault();
          return false;
      
      }else if(usuario.value.length > 30){
      
        console.log('El nombre del usuario es demasiado largo')
          evt.preventDefault();
          return false;
      
      }
    
  


});