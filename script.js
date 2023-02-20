let verticalArray = [];
let horizontalArray = [];
let mouseDown = 0;
let colorClass = 'black';
let child = document.getElementsByClassName('grid');
let pageContent = document.querySelector('.page-content');
let clearAll = document.querySelector('.clear-all');
let randomMode = 0;

/*rainbow mode*/
function randomColor(){
    let colors = ["yellow","orange","red", "blue", "green", "purple", "pink", "brown", "black"];
    let randomNumber = Math.floor(Math.random()*8);
    colorClass = colors[randomNumber];
    return colorClass;
}

function drawSquares(squareInfo){
    document.addEventListener('mousedown', () => mouseDown = 1);
    document.addEventListener('mouseup', () => mouseDown = 0);
    colorChoice();
    let squares = document.querySelectorAll(squareInfo);
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if(randomMode){colorClass = randomColor()}
            square.classList.remove("yellow","orange","red", "blue", "green", "purple", "pink", "brown", "black", "eraser", "party", "rainbow");
            square.classList.add(colorClass)});
            
        square.addEventListener('mouseover', () => {
            if(mouseDown){
                if(randomMode){colorClass = randomColor()}
                square.classList.remove("yellow","orange","red", "blue", "green", "purple", "pink", "brown", "black", "eraser", "party", "rainbow");
                square.classList.add(colorClass)}});
    })
}

function createGrid(resolution, squareDimension){
    let grid = document.createElement('div');
    grid.classList.add('grid');
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
/* handles color panel */
function colorChoice(){

    function setSquareCollor(e){
        colorClass = e;
        randomMode = 0;
    }

    let yellow = document.querySelector('.yellow');
    yellow.addEventListener('click', () => setSquareCollor('yellow'));

    let orange = document.querySelector('.orange');
    orange.addEventListener('click', () => setSquareCollor('orange'));

    let red = document.querySelector('.red');
    red.addEventListener('click', () => setSquareCollor('red'));

    let blue = document.querySelector('.blue');
    blue.addEventListener('click', () => setSquareCollor('blue'));

    let green = document.querySelector('.green');
    green.addEventListener('click', () => setSquareCollor('green'));

    let purple = document.querySelector('.purple');
    purple.addEventListener('click', () => setSquareCollor('purple'));

    let pink = document.querySelector('.pink');
    pink.addEventListener('click', () => setSquareCollor('pink'));

    let brown = document.querySelector('.brown');
    brown.addEventListener('click', () => setSquareCollor('brown'));

    let black = document.querySelector('.black');
    black.addEventListener('click', () => setSquareCollor('black'));

    let eraser = document.querySelector('.eraser');
    eraser.addEventListener('click', () => setSquareCollor('eraser'));
    
    let party = document.querySelector('.party');
    party.addEventListener('click', () => setSquareCollor('party'));

    let random = document.querySelector('.random');
    random.addEventListener('click', () => randomMode = 1);
}

/* handles drawing grid */
numOfSquares = 12;
createGrid(numOfSquares, 'minSquare');
drawSquares('.minSquare');
clearAll.addEventListener('click', () => drawSmallGrid())

function drawSmallGrid(){
    pageContent.removeChild(child[0]);
    numOfSquares = 12;
    createGrid(numOfSquares, 'minSquare');
    drawSquares('.minSquare');
}

function drawMedGrid(){
    pageContent.removeChild(child[0]);
    numOfSquares = 16;
    createGrid(numOfSquares, 'midSquare');
    drawSquares('.midSquare');
}

function drawLargeGrid(){
    pageContent.removeChild(child[0]);
    numOfSquares = 32;
    createGrid(numOfSquares, 'largeSquare');
    drawSquares('.largeSquare');
}

/* handles clear all button */
let smallSquare = document.querySelector('.res12');
smallSquare.addEventListener('click', () => {
    drawSmallGrid();
    clearAll.addEventListener('click', () => drawSmallGrid())
})

let medSquare = document.querySelector('.res16');
medSquare.addEventListener('click', () => {
    drawMedGrid();
    clearAll.addEventListener('click', () => drawMedGrid())
})

let largeSquare = document.querySelector('.res32');
largeSquare.addEventListener('click', () => {
    drawLargeGrid();
    clearAll.addEventListener('click', () => drawLargeGrid())
})
