class Tower {
  constructor(cell, attackPower, attackSpeed, range) {
    this.cell = cell;
    this.attackPower = 10;
    this.attackSpeed = 1000;
    this.range = range;
  }

  attack(enemy) {
    enemy.health -= this.attackPower;
    if (enemy.health <= 0) {
      enemy.cell.classList.remove('enemy-cell');
      enemy.cell.classList.add('empty-cell');
      money += 100;
    }
  }
}

let money = 100;
let selectedCell;
let towers = [];
let enemies = [];

function buildTower() {
  if (selectedCell && selectedCell.classList.contains('empty-cell') && money >= 50) {
    money -= 50;
    document.getElementById('money').textContent = money;

    // Create a new tower and add it to the towers array
    const tower = new Tower(selectedCell, 10, 1000, 3); // Example values, adjust as needed
    towers.push(tower);

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

    // Create an enemy object and add it to the enemies array
    const enemy = { cell: randomCell, health: 20 }; // Example values, adjust as needed
    enemies.push(enemy);
  }
}

function attackEnemies() {
  towers.forEach(tower => {
    enemies.forEach(enemy => {
      // Check if the enemy is within range
      if (getDistance(tower.cell, enemy.cell) <= tower.range) {
        tower.attack(enemy);
      }
    });
  });
}

function getDistance(cell1, cell2) {
  const index1 = Array.from(document.querySelectorAll('.cell')).indexOf(cell1);
  const index2 = Array.from(document.querySelectorAll('.cell')).indexOf(cell2);
  return Math.abs(index1 - index2);
}

function moveEnemy(enemyCell) {
  const gridCells = document.querySelectorAll('.cell');
  const currentIndex = Array.from(gridCells).indexOf(enemyCell);
  const nextIndex = currentIndex + 1;
  const nextCell = gridCells[nextIndex];

  if (nextCell && nextCell.classList.contains('empty-cell')) {
    enemyCell.classList.remove('enemy-cell');
    nextCell.classList.add('enemy-cell');
    setTimeout(() => moveEnemy(nextCell), 500);
  } else {
    alert('Game Over!');
    resetGame();
  }

  attackEnemies();
}

function resetGame() {
  const gridCells = document.querySelectorAll('.cell');
  gridCells.forEach(cell => {
    cell.classList.remove('tower-cell', 'enemy-cell');
    cell.classList.add('empty-cell');
  });

  money = 100;
  document.getElementById('money').textContent = money;

  towers = [];
  enemies = [];
}

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');
  const startButton = document.getElementById('start-button');
  const buildButton = document.getElementById('build-button');

  for (let i = 0; i < 50; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'empty-cell');
    cell.addEventListener('click', () => {
      selectedCell = cell;
    });
    gridContainer.appendChild(cell);
  }

  startButton.addEventListener('click', () => {
    setInterval(spawnEnemy, 2000);
  });

  buildButton.addEventListener('click', buildTower);
});
