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

const scene = new THREE.Scene();

// Criar câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Criar renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adicionar uma geometria
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Atualizar cena
const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
