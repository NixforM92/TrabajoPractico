

const frase = "permitido"
let alertaVista
let visto = sessionStorage.getItem(alertaVista)

if (visto != "true"){

let input = prompt ("Nada es verdad, todo está...")
if (input ==null){
    alert(`Acceso denegado`)
    location.reload()
} 

while(input != frase &&input !=null){
     
alert(`Acceso denegado`)
input= prompt("Aun te falta conocimiento para entrar a la hermandad, pruebe otra vez")
if (input ==null){
    alert(`Acceso denegado`)
    location.reload()
} 

}

if (input == frase ) {
    sessionStorage.setItem(alertaVista, 'true');
  }
  }