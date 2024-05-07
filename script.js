const botaoAbrir = document.querySelector("header > button");
const botaoFechar = document.querySelector("header nav button");
const body = document.querySelector("body");
const nav = document.querySelector("header .mobile");

botaoAbrir.addEventListener('click', abrirMenu);
botaoFechar.addEventListener('click', fecharMenu);

function abrirMenu() {
  body.classList.add("escurecer");
  nav.classList.add("abrir");
}
    
function fecharMenu() {
  body.classList.remove("escurecer");
  nav.classList.remove("abrir");
}

// Seleciona todos os links dentro da terceira seção
const linksTerceiraSecao = document.querySelectorAll('.terceira-secao a');

// Adiciona um event listener para cada link
linksTerceiraSecao.forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Muda a cor do texto do link ao passar o mouse sobre ele
        link.style.color = 'red'; // Altere a cor desejada aqui
    });

    // Define o evento de mouseleave para restaurar a cor original quando o mouse sai do link
    link.addEventListener('mouseleave', () => {
        link.style.color = 'var(--silver)'; // Restaura a cor original
    });
});
