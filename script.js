let verticalArray = [];
let horizontalArray = [];
let mouseDown = 0;

let child = document.getElementsByClassName('grid');

function drawSquares(squareInfo){
    document.addEventListener('mousedown', () => mouseDown = 1);
    document.addEventListener('mouseup', () => mouseDown = 0);
    
    let squares = document.querySelectorAll(squareInfo);
    squares.forEach((square) => {
        console.log('in');
        square.addEventListener('click', () => square.classList.add('active'));
        square.addEventListener('mouseover', () => {
            if(mouseDown){square.classList.add('active')}});
    })
}

function createGrid(resolution, squareDimension){
    let grid = document.createElement('div');
    grid.classList.add('grid')
    document.body.appendChild(grid);

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

numOfSquares = 12;
createGrid(numOfSquares, 'minSquare');
drawSquares('.minSquare');

let smallSquare = document.querySelector('.res12');
    smallSquare.addEventListener('click', () => { 
    document.body.removeChild(child[0]);
    numOfSquares = 12;
    createGrid(numOfSquares, 'minSquare');
    drawSquares('.minSquare');
})

let medSquare = document.querySelector('.res16');
    medSquare.addEventListener('click', () => {
    document.body.removeChild(child[0]);
    numOfSquares = 16;
    createGrid(numOfSquares, 'midSquare');
    drawSquares('.midSquare');
})

let largeSquare = document.querySelector('.res32');
    largeSquare.addEventListener('click', () => {
    document.body.removeChild(child[0]);
    numOfSquares = 32;
    createGrid(numOfSquares, 'largeSquare');
    drawSquares('.largeSquare');
})




