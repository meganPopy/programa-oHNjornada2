function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuario");
 elemento.textContent = nomeUsuario;
}
inserirNome();

function inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuário");
    elemento.textContent = nomeUsuario;
    elemento.style.color = corAleatoria(); // Define a cor inicial ao exibir o nome
