let money = 100;

function buildTower() {
  if (money >= 50) {
    money -= 50;
    document.getElementById('money').textContent = money;

    alert('Tower built!');
  } else {
    alert('Not enough money to build a tower!');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');

  for (let i = 0; i < 50; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => {
      alert('Clicked on cell ' + i);
    });
    gridContainer.appendChild(cell);
  }
});
