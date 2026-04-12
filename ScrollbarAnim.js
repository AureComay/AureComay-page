// codigo que encontre en un archivo viejo que no se añadio a aure pages, tambien hecho por chatgpt.
// esta cosa requiere el siguiente tag, no lo olvides: <style id="scrollglitch"></style>.
// integralo con script:src o script normal. recomiendo src para que esta wea pueda ser actualizada y los cambios se reflejen en todos los archivos integrados.

const glitchColors = ["#9009ff", "#6406b1", "#4e0688", "#3b0766", "#280446", "#130222",

];
const glitchTag = document.getElementById("scrollglitch");

setInterval(() => {
    const c = glitchColors[Math.floor(Math.random() * glitchColors.length)];
    glitchTag.textContent = `
        ::-webkit-scrollbar-thumb {
            border-radius: 12px;
            background: ${c} !important;
            box-shadow: 0 0 8px ${c};
        }
    `;
}, 50);