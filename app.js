let amigos = [];

// Adicionar amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    const mensagemErro = document.getElementById('mensagemErro');

    mensagemErro.textContent = ''; // limpa mensagens anteriores

    if (nomeAmigo === '') {
        mensagemErro.textContent = 'Por favor, digite um nome!';
    } else if (amigos.includes(nomeAmigo)) {
        mensagemErro.textContent = 'Este nome já foi adicionado!';
    } else {
        amigos.push(nomeAmigo);
        atualizarLista();
    }

    inputAmigo.value = ''; 
}

// Atualizar lista no HTML
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = "❌";
        btnRemover.classList.add("remove-btn");
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

// Remover amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Sortear amigo
function sortearAmigo() {
    const mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.textContent = '';

    if (amigos.length < 2) {
        mensagemErro.textContent = 'Adicione pelo menos 2 amigos para realizar o sorteio!';
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const resultadoFinal = document.getElementById('resultado');
    
    resultadoFinal.classList.remove("show-result");
    void resultadoFinal.offsetWidth; // reset animação

    resultadoFinal.textContent = `✨ O amigo secreto sorteado é: ${amigos[indiceSorteado]} ✨`;
    resultadoFinal.classList.add("show-result");
}

// Reiniciar
function reiniciar() {
    amigos = [];
    document.getElementById('resultado').textContent = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('mensagemErro').textContent = '';
}

// === Eventos modernos ===
document.querySelector('.button-add').addEventListener('click', adicionarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
document.getElementById('reiniciar').addEventListener('click', reiniciar);