function insertarFruta(evt) {
    evt.preventDefault();
  
    let fruta = document.getElementById("fruta").value;
  
    if (fruta == "") {
      alert("No ha insertado fruta");
    } else {
      let opcion = "<li> " + fruta + "</li>";
  
      let lista = document.getElementById("lista-fruta");
  
      lista.innerHTML += opcion;
  
      alert("Se ha insertado una");
    }
  
  }

  function borrarFruta(evt) {
      evt.preventDefault();

      let fruta = document.getElementById("fruta").value;
      let opcion = "<li> " + fruta + "</li>";
      let lista = document.getElementById("lista-fruta");
      lista.innerHTML -= opcion;

      fruta.pop();

  }