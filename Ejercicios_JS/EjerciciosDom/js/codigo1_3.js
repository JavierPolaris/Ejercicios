



let listaG;
//Boton de agregar
document.getElementById('boton').addEventListener('click', () => {
  var palabra = document.getElementById('palabra').value;
  var definicion = document.getElementById('definicion').value;

  if (palabra == "" || definicion == "") {
    alert("Tienes que introducir información");
  } else {
    let newPalabra = "<dt>" + palabra + "</dt>";
    let newDefinicion = "<dd>" + definicion + "</dd>";
    listaG = newPalabra + newDefinicion;
    // let listaM = "<dl>" + listaG + "</dl>";

    let lista = document.getElementById("defect");
    lista.innerHTML += listaG;
    
  }
  

})

var defect = `<dl> 

<dt>Red Telefónica Conmutada (RTC)</dt>
<dd>La línea telefónica de toda la vida. Para acceder a Internet es necesario un módem.</dd>
<dt>Red Digital de Servicios Integrados (RDSI)</dt>
<dd>Una línea telefónica especial. Para acceder a Internet es necesario un módem RDSI.</dd>

<dt>Línea de Abonado Digital Asimétrica (ADSL)</dt>
<dd>Se basa en la conversión de una línea RTC en una línea de alta velocidad. Para acceder a Internet es
necesario un módem ADSL.</dd>

<dt>Fibra Óptica</dt>
<dd>Una línea de fibra óptica. Normalmente la fibra óptica no llega hasta el usuario final, por lo que el
                término más apropiado es Fibra híbrida coaxial.</dd>
</dl>`;

document.getElementById('defect').innerHTML = defect;


//Boton de eliminar
document.getElementById('boton1').addEventListener('click', () => {
  var palabra = document.getElementById('palabra').value;
  var definicion = document.getElementById('definicion').value;
  
  let intoList = document.querySelectorAll('dt')
  let intoList2 = document.querySelectorAll('dd')

  

  for (let i = 0; i <= intoList.length; i++) {
    if (intoList[i].innerHTML == palabra) {
      intoList[i].style.display = 'none';
      intoList2[i].style.display = 'none';
        i = intoList.length;
      }
      
    }
  
    
  // }
  // for (let i = 0; i < intoList2.length; i++) {
  //   if (intoList2[i].innerHTML == definicion) {
  //     intoList2[i].style.display = 'none';
  //   }
    
  // }



});


