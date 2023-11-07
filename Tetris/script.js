const grid = document.querySelector('.grid');
const nextPiece = document.getElementById('next-piece');

const ROWS = 20;
const COLUMNS = 10;

function createGrid() {
  for (let i = 0; i < ROWS * COLUMNS; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
  }
}

createGrid();

function createNextPiece() {
  for (let i = 0; i < 4; i++) {
    const cell = document.createElement('div');
    nextPiece.appendChild(cell);
  }
}

createNextPiece();
