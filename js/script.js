document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#postForm');
    const tituloInput = document.querySelector('#titulo');
    const conteudoInput = document.querySelector('#conteudo');
    const renderizadorTitulo = document.querySelector('#renderizador-titulo');
    const renderizadorConteudo = document.querySelector('#renderizador-conteudo');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const data = {
            title: tituloInput.value,
            body: conteudoInput.value,
            userId: 1
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                renderizadorTitulo.innerHTML = data.title;
                renderizadorConteudo.innerHTML = data.body;
            })
            .catch(error => console.error('Erro:', error));
    });
});
