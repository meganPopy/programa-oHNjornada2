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

const item = document.querySelector("#lista");
item.textContent = `${linguagens[0]}, ${linguagens[1]} e ${linguagens[2]}`;

let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ªsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]

}
const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;

