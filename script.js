const boxes = document.querySelectorAll('.box');
const h4Element = document.querySelector('h4');

// Array de cores para o h4
const colors = ['#FFA07A', '#FF8C00', '#FF4500', '#90EE90', '#32CD32', '#006400', '#FFD700', '#FF6347'];

// mudar a cor ao passar o mouse nas boxes
function changeColorOnHover(event) {
    event.target.style.backgroundColor = '#FF5733'; 
}

// restaurar a cor original ao remover o mouse
function resetColor(event) {
    event.target.style.backgroundColor = '#4CAF50'; 
}

// evento de passar o mouse em cima ou tirar pra mudar a cor da boxe
boxes.forEach(box => {
    box.addEventListener('mouseover', changeColorOnHover);
    box.addEventListener('mouseout', resetColor);
});

// Função para alternar a cor do h4 a cada 2seg
let colorIndex = 0;
function changeH4Color() {
    h4Element.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Loop nas cores
}
setInterval(changeH4Color, 2000);
