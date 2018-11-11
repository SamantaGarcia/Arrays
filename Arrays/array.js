var button = document.querySelector("#button");
button.addEventListener("click", ejercicio1);
var input = document.querySelector("#input");
var res = document.querySelector("#res");

function ejercicio1(){
  let t = Number(input.value);

  let v = [];

  for (let i = 0; i < t; i++) {
    let x = prompt("Ingresa un número: ");
    v[i] = x;
  }

    let row = res.insertRow(-1);
  for (let i = 0; i < v.length; i++) {

    let cell = row.insertCell(i);
    cell.innerHTML = v;
  }

}
