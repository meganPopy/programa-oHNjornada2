function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuario");
 elemento.textContent = nomeUsuario;
}
inserirNome();

  function mudarCor(){
  const elemento = document.getElementById("nome-usuário");
  elemento.style.color = "red";
 
}
mudarCor();
