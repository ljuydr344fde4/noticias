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
document.addEventListener("DOMContentLoaded", function() {
  const vejaMaisButton = document.querySelector('.veja-mais');
  const descricao = document.querySelector('.descricao');
  const fecharButton = document.querySelector('.fechar');

  vejaMaisButton.addEventListener('click', function() {
      descricao.style.display = 'block';
  });

  fecharButton.addEventListener('click', function() {
      descricao.style.display = 'none';
  });
});

