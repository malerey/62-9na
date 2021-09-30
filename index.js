// string
// number (NaN)
// bool
// undefined
// null 

// array
// funciones
// objetos 

// const producto = {
//   titulo: "Iphone 13",
//   precio: 200000,
//   tieneEnvioGratis: true
// }

// const ruido = "moto"
// const puntosDeVenta = ["Mercado Libre", "Mercado preso", "Correo Compras"]
// producto.descripcion = "Un celular muy caro"
// producto.lugaresDeVenta = puntosDeVenta
// producto.titulo = "El celu de Naty"
// producto.ruidoQueEscuche = ruido
// console.log(producto)


// const usuarioEjemplo = {
//   id: 0,
//   nombre: "usuarioEjemplo",
//   edad: 25,
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// const sandra = {
//   id: 0,
//   nombre: "Sandra",
//   edad: 25,
//   email: "ejemplo@terra.com",
//   telefono: "1029384756",
//   sabeProgramar: true,
//   tecnologiasConocidas: ["Python", "Pascal", "C++"]
// }

// usuarioEjemplo.sabeProgramar = true
// usuarioEjemplo.tecnologiasConocidas = ["Html", "css", "js"]

// const mostrarTecnologias = (usuarioEjemplo) => {
//   if (usuarioEjemplo.sabeProgramar === true) {
//     return usuarioEjemplo.tecnologiasConocidas
//   }
//   else {
//     return []
//   }
// }

// console.log(mostrarTecnologias(usuarioEjemplo))
// console.log(mostrarTecnologias(sandra))


// crear propiedades
// modificar propiedades 


// const persona = {
//   id: 0,
//   nombre: "Sandra",
//   edad: 25,
//   email: "ejemplo@terra.com",
//   telefono: "1029384756",
//   sabeProgramar: true,
//   tecnologiasConocidas: ["Python", "Pascal", "C++"]
// }

// // chequear propiedades 
// console.log("id" in persona) // true
// console.log("fechaDeCumpleanios" in persona) //

// if ("fechaDeCumpleanios" in persona &&
//  persona.fechaDeCumpleanios === "29/09/2010") {
//    alert("feliz cumple")
//  }

// console.log(persona)
// // eliminar propiedades 
// delete persona.telefono

// console.log(persona)



// JavaScript OBJECT NOTATION 
// JSON

// guardar informacion en el navegador 

// const persona = {
//   id: 0,
//   nombre: "Sandra",
//   edad: 25,
//   email: "ejemplo@terra.com",
//   telefono: "1029384756",
//   sabeProgramar: true,
//   tecnologiasConocidas: ["Python", "Pascal", "C++"]
// }

// // toma un objeto de javascript y lo convierte a JSON
// const personaConvertidoAJSON = JSON.stringify(persona)

// console.log(persona)
// console.log(personaConvertidoAJSON)

// // // guardar info en local storage
// // localStorage.setItem('persona', personaConvertidoAJSON)

// // // obtener info de local storage
// const infoGuardada = localStorage.getItem('persona')

// // esto es JSON, no js 
// console.log(infoGuardada)

// // convertir de JSON a Javascript
// const infoGuardadaEnJS = JSON.parse(infoGuardada)

// console.log(infoGuardadaEnJS)

// const titulo = document.querySelector("#titulo")

// titulo.textContent = infoGuardadaEnJS.nombre



// // para guardar info en localstorage

// 1. tener un objeto en js
// const datos = {
//   email: "sandra@yahoo.com"
// }
// // 2. lo tengo que convertir a JSON (y guardarlo en una variable)
// const datosConvertidosAJSON = JSON.stringify(datos)

// // 3. lo tengo que guardar en localstorage
// localStorage.setItem('datos', datosConvertidosAJSON)


// // para acceder a la info en localstorage

// // 1. lo obtengo de localstorage (y lo guardo en una variable)
// const datosDelLocalStorage = localStorage.getItem('datos')
// // 2. lo convierto de JSON a Javascript (y lo guardo en una variable)
// const datosConvertidos = JSON.parse(datosDelLocalStorage)
// // 3. ya estoy lista para usarlo :)
// console.log(datosConvertidos)

// const titulo = document.querySelector("#titulo")

// titulo.textContent = datosConvertidos.email



// // para chequear si existe info en local storage 
// const datosQueNoExistenLocalStorage = localStorage.getItem('datos')

// console.log(datosQueNoExistenLocalStorage)

// if (datosQueNoExistenLocalStorage) {
//   const datosConvertidos = JSON.parse(datosQueNoExistenLocalStorage)
//   console.log(datosConvertidos)
// }
// else {
//   console.log("datos no existen")
// }

// aplicacion practica

// si el usuario pone la pagina en modo oscuro
// se guarda modo osc como preferencia
// la proxima vez que entre se ve en modo oscuro
// si el usuario pone la pagina en modo claro
// se guarda modo claro como preferencia
// la proxima vez que entre se ve en modo claro


const body = document.querySelector("body")
const botonCambiarModo = document.querySelector("#cambiar-modo")
const textoModo = document.querySelector("#nombre-modo")


if (localStorage.getItem('modo')) {
  const preferenciaModoJSON = localStorage.getItem('modo')
  console.log(preferenciaModoJSON)
  const preferenciaModo = JSON.parse(preferenciaModoJSON)
  console.log(preferenciaModo)
  
  if (preferenciaModo.modo === "oscuro") {
    body.classList.add("modo-oscuro")
    textoModo.textContent = "claro"
  }
  else {
    body.classList.remove("modo-oscuro")  
    textoModo.textContent = "oscuro"
  }
}
else {
  const modo = {
    modo: "claro"
  }
  const preferenciaModo = JSON.stringify(modo)
  localStorage.setItem('modo', preferenciaModo)
}


botonCambiarModo.onclick = () => {
  body.classList.toggle("modo-oscuro")
  if (textoModo.textContent == "claro") {
    textoModo.textContent = "oscuro"
    // objeto
    const modo = {
      modo: "claro"
    }
    // convertirlo a json
    const modoAJSON = JSON.stringify(modo)
    // guardarlo en local storage
    localStorage.setItem('modo', modoAJSON)
  }
  else {
    textoModo.textContent = "claro"
    // objeto
    const modo = {
      modo: "oscuro"
    }
    // convertirlo a json
    const modoAJSON = JSON.stringify(modo)
    // guardarlo en local storage
    localStorage.setItem('modo', modoAJSON)
  }
}
