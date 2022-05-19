const container = document.querySelector('.container');
const button = document.querySelector('button');

let size = 0, 
    boxSize = 0;

function createSquares(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row');
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.setAttribute('style', `padding: ${boxSize - 1}px; border: 1px solid black;`);    
            box.addEventListener("mouseenter", () => {
                box.classList.add('hover');
                box.setAttribute('style', `padding: 0px; border: ${boxSize}px solid black;`);
            });
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function deleteSquares() {
    container.innerHTML = '';
}

function initialize() {
    size = prompt('Grid Size:');
    (size > 100) && (size = 100);
    boxSize = 250 / size;
    deleteSquares();
    createSquares(size, boxSize);
}
button.addEventListener('click', () => {
    initialize();
});

initialize();