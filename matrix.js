// Secuencia del Código Konami
const konamiCode = [
  "ArrowUp", "ArrowUp", 
  "ArrowDown", "ArrowDown", 
  "ArrowLeft", "ArrowRight", 
  "ArrowLeft", "ArrowRight", 
  "b", "a"
];

let konamiIndex = 0;
let matrixIniciado = false;

// Escuchar teclas para activar
window.addEventListener("keydown", (e) => {
  const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  const expectedKey = konamiCode[konamiIndex].length === 1 
    ? konamiCode[konamiIndex].toLowerCase() 
    : konamiCode[konamiIndex];

  if (key === expectedKey) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      iniciarMatrixCustom();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

// TU CÓDIGO EXACTO DENTRO DE LA FUNCIÓN
function iniciarMatrixCustom() {
  if (matrixIniciado) return; // Evita duplicar el canvas si lo metes 2 veces
  matrixIniciado = true;

  // Crear y configurar el Canvas automáticamente para el fondo
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Estilos para que quede fijo de fondo sin molestar el contenido
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "-1"; // Detrás de todo el HTML
  canvas.style.pointerEvents = "none";
  document.body.prepend(canvas);

  // Ajustar tamaño del Canvas a la ventana
  function redimensionarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  redimensionarCanvas();
  window.addEventListener("resize", redimensionarCanvas);

  // Caracteres estilo Matrix (letras, números y símbolos)
  const caracteres = "10YALMILAUREABRISAANTY1111111000000000000".split("");
  const fontSize = 24;
  let columnas = Math.floor(canvas.width / fontSize);

  let gotas = Array.from({ length: columnas }, () => Math.floor(Math.random() * -100));

  function dibujarMatrix() {
    // Fondo semi-transparente para crear el efecto de estela/desvanecido
    ctx.fillStyle = "rgba(14, 7, 0, 0.29)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Color de las letras (Morado Neón para Aure Pages)
    ctx.fillStyle = "#f79655"; 
    ctx.font = `${fontSize}px 'Tiny5', sans-serif`;

    // Recorrer y dibujar cada gota
    for (let i = 0; i < gotas.length; i++) {
      const texto = caracteres[Math.floor(Math.random() * caracteres.length)];
      ctx.fillText(texto, i * fontSize, gotas[i] * fontSize);

      // Si la gota llega al final o por azar, se reinicia arriba
      if (gotas[i] * fontSize > canvas.height && Math.random() > 0.975) {
        gotas[i] = 0;
      }
      gotas[i]++;
    }
  }

  setInterval(dibujarMatrix, 120);
}
