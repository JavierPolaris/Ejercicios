function boton() {
    let cad = "";
    let n = prompt('Elige un numero de caracteres');
    for (let i = 0; i < n; i++) {
      if (i % 3 == 0) {
          cad += "*"
      }else if (i % 3 == 1) {
          cad += "+"
      } else {
          cad += "_"
      }
        
    }
    console.log(cad)
}