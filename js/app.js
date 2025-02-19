
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtdIngresso = parseInt(document.getElementById('qtd').value);
    if(isNaN(qtdIngresso) || qtdIngresso <= 0) {
        alert('Insira uma quantidade válida!');
        document.getElementById('qtd').value = '';
        return;
    }

    if(tipoIngresso.value == 'pista') {
        comprarPista(qtdIngresso);
    } else if(tipoIngresso.value == 'superior') {
        comprarSuperior(qtdIngresso);
    } else {
        comprarInferior(qtdIngresso);
    }
}

function comprarPista(qtdIngresso) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtdIngresso > qtdPista) {
        alert('Quantidade indisponível para o tipo "Pista".')
    } else {
        alert('Compra realizada com sucesso!');
        qtdPista = qtdPista - qtdIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
    }
    document.getElementById('qtd').value = '';
}

function comprarSuperior(qtdIngresso) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtdIngresso > qtdSuperior) {
        alert('Quantidade indisponível para o tipo "Cadeira superior".')
    } else {
        alert('Compra realizada com sucesso!');
        qtdSuperior = qtdSuperior - qtdIngresso;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
    document.getElementById('qtd').value = '';
}

function comprarInferior(qtdIngresso) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtdIngresso > qtdInferior) {
        alert('Quantidade indisponível para o tipo "Cadeira inferior".')
    } else {
        alert('Compra realizada com sucesso!');
        qtdInferior = qtdInferior - qtdIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
    document.getElementById('qtd').value = '';
}