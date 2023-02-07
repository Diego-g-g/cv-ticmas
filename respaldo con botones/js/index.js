
//console.log("connection ok");


const randomUsers = async () => {
const response = await fetch("https://randomuser.me/api/?format=JSON _");
const user= await response.json();
/*console.log(user);*/

user["results"][0]["gender"];

const nombre = user["results"][0]["name"].first;
const apellido = user["results"][0]["name"].last;
const imagen = user["results"][0]["picture"].large;

/*document.getElementById("nombre").innerHTML += nombre;*/
var nombreCompleto = nombre+" "+apellido;
console.log(nombreCompleto);
document.getElementById("nomApe").innerHTML += nombreCompleto;

var img = document.createElement('img');
img.src = imagen;

var foto = document.querySelector('#imagen');
foto.appendChild(img);


}
window.addEventListener("load" , function () {
    randomUsers();
});