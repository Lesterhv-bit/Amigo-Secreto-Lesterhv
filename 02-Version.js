//Declaración de variables 
    let amigo = [];

//ingresar función y tomar elemento del HTML
    function agregarAmigo() {
    //variables 
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

// establecer condicion si nombre es nulo
   if (nombreAmigo === "") {
   alert("Por favor, ingrese un nombre");
   return;
//para salir de la funcion si no se escribió algun nombre
}
//ingresar el Array por comando push

    amigo.push(nombreAmigo);

//tomando valor del DOM y borrando texto ingresado en el campo

    inputAmigo.value = "";
//usando .focus para mejorar experiencia usuario a la hora de ingresar los nombres
    inputAmigo.focus();
//mostrar lista 
     mostrarLista();
}
//llamar funcion de renderizar lista 

    function mostrarLista() {
 // tomando del DOM
     let lista = document.getElementById("listaAmigos");
//ir limpiando la lista 
     lista.innerHTML = "";
 // que se vea la lista en DOM
     for (let i = 0; i < amigo.length; i++) {
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigo[i];
    lista.appendChild(nuevoAmigo);
     }
    }
    function sortearAmigo() {
 //ingresando condición si no hya amigos 
        if(amigo.length === 0) {
            alert("No existen amigos para sortear");
            return;  
        }
//declarando variable y llamando de forma aleatoria de la lista 
  
    let sorteado = amigo[Math.floor(Math.random() * amigo.length)]
  //mostrar resultados en el DOM  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es ${sorteado}`;
//limpiando la lista de amigos 
    let limpiando = document.getElementById("listaAmigos");
    limpiando.innerHTML = "";
    }