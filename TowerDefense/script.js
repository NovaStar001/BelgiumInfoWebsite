let money = 100;
let selectedCell;

function buildTower() {
  if (selectedCell && selectedCell.classList.contains('empty-cell') && money >= 50) {
    // Deduct $50 from the player's money
    money -= 50;

    // Update the displayed money value
    document.getElementById('money').textContent = money;

    // Place a tower in the selected cell
    selectedCell.classList.remove('empty-cell');
    selectedCell.classList.add('tower-cell');

    // Reset selected cell
    selectedCell = null;
  } else if (!selectedCell) {
    alert('Select a cell to place the tower.');
  } else if (!selectedCell.classList.contains('empty-cell')) {
    alert('This cell is already occupied.');
  } else {
    alert('Not enough money to build a tower.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');

  for (let i = 0; i < 50; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'empty-cell');
    cell.addEventListener('click', () => {
      // Set the selected cell when clicked
      selectedCell = cell;
    });
    gridContainer.appendChild(cell);
  }
});
