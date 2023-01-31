
//console.log("connection ok");


const randomUsers = async () => {
const response = await fetch("https://randomuser.me/api/?format=JSON _");
const user= await response.json();
console.log(user);
user["results"][0]["gender"];

const nombre = user["results"][0]["name"].first;
const genero = user["results"][0]["gender"];

document.getElementById("sexo").innerHTML += genero;
document.getElementById("nombre").innerHTML += nombre;

}


window.addEventListener("load" , function () {
    randomUsers();
});