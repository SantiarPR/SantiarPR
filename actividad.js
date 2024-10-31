let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let imagen1 = document.getElementById("imagen1");

boton.onclick = function(){
    imagen1.src = "https://media.tenor.com/jJtL4af7Lx8AAAAM/cat-cats.gif";
    titulo.style.display = "none"; 
    boton2.style.display = "none"; 
    boton.style.display = "none"; 
    boton3.style.display = "none"; 
};

boton2.onclick = function(){
    imagen1.src = "https://media.tenor.com/o_5RQarGvJ0AAAAM/kiss.gif";
    titulo.style.display = "none"; 
    boton.style.display = "none"; 
    boton2.style.display = "none"; 
    boton3.style.display = "none"; 
};

boton3.onclick = function(){
    imagen1.src = "https://uploads.dailydot.com/2024/09/cat-cats.gif?auto=compress&fm=gif";
    titulo.style.display = "none"; 
    boton.style.display = "none"; 
    boton2.style.display = "none"; 
    boton3.style.display = "none"; 
};
