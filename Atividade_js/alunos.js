//Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, 
//Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.

function Alunos() {

    const estudantes = [];
    
      while (true) {
        const nomeEstudante = prompt("Digite o nome do estudante (ou digite 'PARE' para encerrar o cadastro):");
    
        if (nomeEstudante == "PARE" || nomeEstudante == "pare" || nomeEstudante == "Pare") {
          break; 
        }
    
        estudantes.push(nomeEstudante);
      }
    
      if (estudantes.length === 0) {
        alert("Nenhum estudante foi cadastrado.");
      } else {
        alert(`Quantidade de estudantes cadastrados: ${estudantes.length}\nLista de estudantes:\n${estudantes.join("\n")}`);
    }
}
  