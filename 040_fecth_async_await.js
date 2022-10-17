
//!EJECUTAR EL CONJUNTO DE ARCHIVOS EN HTDOCS !!!!!!!!!!!!!!


async function obtenerDatos(selector) {

  let peticion= await fetch('040_prueba.txt');
  let respuesta= await peticion.json();
  let elemento= document.createElement("div");
  elemento.classList.add("datos");

  if(selector== 1){
    elemento.classList.add("nombre");
    elemento.textContent= respuesta.nombre;
  }
  else elemento.textContent= respuesta.edad;

  document.body.appendChild(elemento);
  //document.body ::para agregar los elementos en el body
}

document.querySelector(".getNombre").addEventListener("click",()=>obtenerDatos(1));
document.querySelector(".getEdad").addEventListener("click",()=>obtenerDatos(2));



//EJEMPLO FETCH CON ASYNC Y AWAIT BÁSICO

/*
let prueba= async ()=>{
  let peticion= await fetch('040_prueba.txt');
  let respuesta= await peticion.json();
  console.log(respuesta);
}

prueba();
*/

//SI YO QUIERO UTILIZAR .THEN ENTONCES:

/*
let prueba= async ()=>{
  let peticion= await fetch('040_prueba.txt');
  let respuesta= await peticion.json();
  return respuesta;
}

prueba().then(res=>console.log(res))
*/