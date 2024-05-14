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

document.addEventListener("DOMContentLoaded", function() {
  const vejaMaisButton = document.querySelector('.veja-mais');
  const descricao = document.querySelector('.descricao');
  const descricaoOverlay = document.querySelector('.descricao-overlay');
  const fecharButton = document.querySelector('.fechar');
  const body = document.querySelector('body');

  vejaMaisButton.addEventListener('click', function() {
      descricao.style.display = 'block';
      descricaoOverlay.style.display = 'block';
      body.classList.add('body-escurecido'); // Adiciona classe para escurecer o fundo
  });

  fecharButton.addEventListener('click', function() {
      descricao.style.display = 'none';
      descricaoOverlay.style.display = 'none';
      body.classList.remove('body-escurecido'); // Remove classe para escurecer o fundo
  });
});

