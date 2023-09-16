//Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e,
// em seguida, peça ao usuário para digitar o nome de um planeta. 
//Verifique se o planeta que o usuário informou está na array e informe ao usuário.

function Menu(){
    
    var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
    
    let escolha_menu = prompt('Digite uma das opções abaixo: \n\n 1.Pesquisar \n 2.listar\n 3.sair ');

    switch (escolha_menu){
        case '1':
            pesquisar();
        break;
        case '2':
            listar();
        break;
        case '3':
            sair();
        break;
        default:
            erro();
    }

    function pesquisar(){
        let nome_planeta = prompt('Infome nomes de planetas para pesquisar: ');
    
        if (planetas.includes(nome_planeta)) {
            alert(nome_planeta + ' encontrada(o).'+'\n\n' + planetas.join(",") + '\n');

        } else 
            alert(nome_planeta + ' não foi encontrada(o).');
    }

    function listar(){
        planetas.forEach(passando);
        
        for (let i = 0; i < planetas.length; i++) {
            alert("O Planeta " + planetas[i] + " ocupa a posição " + i);
        } 
    }

    function passando(value, index) {
        var posicao = index + 1;
        alert("O Planeta " + value + " ocupa a posição " + posicao);
    }
    
    function sair(){
        alert("Encerrando");
    
    }
    function erro() {
        alert('Por favor, informe um número entre 1 e 3');
        Menu();
    }
}

