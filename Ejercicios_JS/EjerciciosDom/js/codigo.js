

        function ejecutar() {
            var parrafos = document.getElementsByName('p');
            console.log(parrafos)
            
            var primerParrafo = parrafos[0].innerHTML;
            
            let contador = 0;

            for (let i = 0; i < primerParrafo.length; i++) {
                if (primerParrafo[i] === 'e'){
                    // contador.push(i);
                    console.log(primerParrafo[i])
                } 
                
            }
            alert(contador.length);
        }
            
            
            // function ejecutar () { 
            //     parrafos = document.getElementsByTagName("p"); 
            //     for(let i=0; i<parrafos.length; i++) { 
            //         let parrafo = parrafos[i].innerHTML; 
            //         alert (parrafo); 
            //     } 
            // } 
