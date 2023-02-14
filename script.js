let grid = document.querySelector('.grid');
let verticalArray = [];
let horizontalArray = [];
let mouseDown = 0;
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
document.addEventListener('mousedown', () =>{
    mouseDown = 1;
})
document.addEventListener('mouseup', () => {
    mouseDown = 0;  
})

let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('click', () => square.classList.add('active'));
    square.addEventListener('mouseover', () => {
        if(mouseDown){square.classList.add('active')}
        });
})





