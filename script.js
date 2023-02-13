let grid = document.querySelector('.grid');
let verticalArray = [];
let horizontalArray = [];

let numOfSquares = 16;

for (let i = 0; i < numOfSquares; i++){
    verticalArray[i] = document.createElement('div');
    grid.appendChild(verticalArray[i]);

    for(let j = 0; j < numOfSquares; j++){
        horizontalArray[j] = document.createElement('div');
        horizontalArray[j].classList.add('square');
        verticalArray[i].appendChild(horizontalArray[j]);
    }

}

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => square.classList.add('active'));
})
