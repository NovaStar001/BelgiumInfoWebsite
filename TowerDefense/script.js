let money = 100;
let selectedCell;

// ... (Previous code remains unchanged)

function buildTower() {
  if (selectedCell && selectedCell.classList.contains('empty-cell') && money >= 50) {
    money -= 50;
    document.getElementById('money').textContent = money;
    selectedCell.classList.remove('empty-cell');
    selectedCell.classList.add('tower-cell');
    selectedCell = null;
  } else if (!selectedCell) {
    alert('Select a cell to place the tower.');
  } else if (!selectedCell.classList.contains('empty-cell')) {
    alert('This cell is already occupied.');
  } else {
    alert('Not enough money to build a tower.');
  }
}

function spawnEnemy() {
  const gridCells = document.querySelectorAll('.cell');
  const emptyCells = Array.from(gridCells).filter(cell => cell.classList.contains('empty-cell'));

  if (emptyCells.length > 0) {
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    randomCell.classList.remove('empty-cell');
    randomCell.classList.add('enemy-cell');
    
    // Move the enemy
    moveEnemy(randomCell);
  }
}

// ... (Previous code remains unchanged)

function moveEnemy(enemyCell) {
  const gridCells = document.querySelectorAll('.cell');
  const currentIndex = Array.from(gridCells).indexOf(enemyCell);

  // Move the enemy to the next cell
  const nextIndex = currentIndex + 1;
  const nextCell = gridCells[nextIndex];

  if (nextCell && nextCell.classList.contains('empty-cell')) {
    enemyCell.classList.remove('enemy-cell');
    nextCell.classList.add('enemy-cell');

    // Move the enemy to the next cell after a delay (you can adjust the delay based on your game speed)
    setTimeout(() => moveEnemy(nextCell), 500);
  } else {
    // Enemy reached the end or another condition for game over
    alert('Game Over!');
    resetGame();
  }
}

function resetGame() {
  // Reset the grid and other game variables
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => {
    cell.classList.remove('tower-cell', 'enemy-cell');
    cell.classList.add('empty-cell');
  });

  money = 100;
  document.getElementById('money').textContent = money;

  // Add more reset logic based on your game design
}

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');
  const startButton = document.getElementById('start-button');
  const buildButton = document.getElementById('build-button');

  for (let i = 0; i < 50; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => {
      alert('Clicked on cell ' + i);
    cell.classList.add('cell', 'empty-cell');
    gridContainer.appendChild(cell);
  }

  startButton.addEventListener('click', () => {
    setInterval(spawnEnemy, 2000); // Spawn an enemy every 2 seconds (adjust based on your game speed)
  });

  buildButton.addEventListener('click', buildTower);
});
