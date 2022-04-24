document.querySelector("#boton1").addEventListener('click', () => {
    var cadena = document.querySelector('#frase').value;
      
    function contarNum() {
      const words = cadena.split(' ')
      const chars = words.join('').split(''); // convertir la cadena en array de caracteres eliminando los espacios
      const digits = chars.filter(num => num >= 0 && num <= 9); // para obtener los numeros solo basta con esta comparacion  
      

      return `
      <ul>
        <li>Números : ${digits.length}</li>
        <li>Espacios : ${words.length - 1}</li>
        <li>Otros carácteres : ${chars.length - digits.length}</li>
      </ul>`
    }
    document.querySelector('#resultado').innerHTML = contarNum();
  })
    
    
    