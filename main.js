const form = document.getElementById('form-contato');
let nomes = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
});

function adicionaLinhas() {
    const input_nome_contato = document.getElementById('nome-contato');
    const input_telefone_contato = document.getElementById('telefone-contato');

    if (nomes.includes(input_nome_contato.value)) {
        alert(`O nome "${input_nome_contato.value}" já consta na lista de contatos`);
    } else {
        nomes.push(input_nome_contato.value);

        let linha = '<tr>';
        linha += `<td>${input_nome_contato.value}</td>`;
        linha += `<td>${input_telefone_contato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    input_nome_contato.value = '';
    input_telefone_contato.value = '';
}

function atualizaTabela() {
    const corpo_tabela = document.querySelector('tbody');
    corpo_tabela.innerHTML = linhas;
}