const container = document.querySelector('.container');
const button = document.querySelector('button');

let size = 0;

function createSquares(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row');
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.addEventListener("mouseenter", () => {
                box.classList.add('hover');
            });
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

button.addEventListener('click', () => {
    size = prompt('Grid Size:');
});

size = prompt('Grid Size:');
createSquares(size);

