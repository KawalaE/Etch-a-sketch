let verticalArray = [];
let horizontalArray = [];
let mouseDown = 0;
let colorClass = 'active';
let child = document.getElementsByClassName('grid');
let pageContent = document.querySelector('.page-content');


function drawSquares(squareInfo){
    document.addEventListener('mousedown', () => mouseDown = 1);
    document.addEventListener('mouseup', () => mouseDown = 0);
    
    let squares = document.querySelectorAll(squareInfo);
    squares.forEach((square) => {
        colorChoice();
        square.addEventListener('click', () => square.classList.add(colorClass));
        square.addEventListener('mouseover', () => {
            if(mouseDown){square.classList.add(colorClass)}});
    })
}

function createGrid(resolution, squareDimension){
    let grid = document.createElement('div');
    grid.classList.add('grid')
    pageContent.appendChild(grid);

    for (let i = 0; i < resolution; i++){
        verticalArray[i] = document.createElement('div');
        grid.appendChild(verticalArray[i]);

        for(let j = 0; j < resolution; j++){
            horizontalArray[j] = document.createElement('div');
            horizontalArray[j].classList.add(squareDimension);
            verticalArray[i].appendChild(horizontalArray[j]);
        }

    }
}

function colorChoice(){

    let yellow = document.querySelector('.yellow');
    yellow.addEventListener('click', () => colorClass = 'yellow');

    let orange = document.querySelector('.orange');
    orange.addEventListener('click', () => colorClass = 'orange');

    let red = document.querySelector('.red');
    red.addEventListener('click', () => colorClass = 'red');

    let blue = document.querySelector('.blue');
    blue.addEventListener('click', () => colorClass = 'blue');

    let green = document.querySelector('.green');
    green.addEventListener('click', () => colorClass = 'green');

    let purple = document.querySelector('.purple');
    purple.addEventListener('click', () => colorClass = 'purple');

    let grey = document.querySelector('.grey');
    grey.addEventListener('click', () => colorClass = 'grey');

    let brown = document.querySelector('.brown');
    brown.addEventListener('click', () => colorClass = 'brown');

    let black = document.querySelector('.black');
    black.addEventListener('click', () => colorClass = 'black');

    let eraser = document.querySelector('.eraser');
    eraser.addEventListener('click', () => colorClass = 'eraser'); 

}
numOfSquares = 12;
createGrid(numOfSquares, 'minSquare');
drawSquares('.minSquare');



let smallSquare = document.querySelector('.res12');
    smallSquare.addEventListener('click', () => { 
    pageContent.removeChild(child[0]);
    numOfSquares = 12;
    createGrid(numOfSquares, 'minSquare');
    drawSquares('.minSquare');
})

let medSquare = document.querySelector('.res16');
    medSquare.addEventListener('click', () => {
    pageContent.removeChild(child[0]);
    numOfSquares = 16;
    createGrid(numOfSquares, 'midSquare');
    drawSquares('.midSquare');
})

let largeSquare = document.querySelector('.res32');
    largeSquare.addEventListener('click', () => {
    pageContent.removeChild(child[0]);
    numOfSquares = 32;
    createGrid(numOfSquares, 'largeSquare');
    drawSquares('.largeSquare');
})




