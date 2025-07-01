function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuário");
 elemento.textContent = nomeUsuario;
}
inserirNome();

  function mudarCor(){
  const elemento = document.getElementById("nome-usuário");
  elemento.style.color = "red";
 
}
mudarCor();

let linguagens = ["JavaScript","Python","C++"];

