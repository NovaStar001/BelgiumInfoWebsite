const speciesData = [
    { id: 'Mountain Laurel', class: 'plants', x: 100, y: 100 },
    { id: 'Rhododendron', class: 'plants', x: 200, y: 100 },
    { id: 'Moose', class: 'herbivores', x: 300, y: 250 },
    { id: 'Old World Porcupine', class: 'herbivores', x: 400, y: 250 },
    { id: 'Fox Squirrel', class: 'herbivores', x: 500, y: 250 },
    { id: 'Yellow Bellied Sapsucker', class: 'herbivores', x: 100, y: 500 },
    { id: 'Red Breasted Nuthatches', class: 'herbivores', x: 200, y: 500 },
    { id: 'White Tail Deer', class: 'herbivores', x: 300, y: 500 },
    { id: 'Black Bear', class: 'carnivores', x: 400, y: 500 },
    { id: 'Opossum', class: 'carnivores', x: 500, y: 500 },   
    { id: 'Jelly Roll Fungus', class: 'fungus', x: 100, y: 750 },
    { id: 'Bradley Milk Cap', class: 'fungus', x: 200, y: 750 },
];

const svg = document.getElementById('connections-svg');

// Function to add species tiles to the container
function addSpeciesTiles() {
    const container = document.querySelector('.food-web-container');
    speciesData.forEach(species => {
        const tile = document.createElement('div');
        tile.id = species.id;
        tile.className = `species ${species.class}`;
        tile.textContent = species.id;
        tile.style.left = `${species.x}px`;
        tile.style.top = `${species.y}px`;
        container.appendChild(tile);
    });
}

// Function to connect species with lines
function connectSpecies(from, to) {
    const fromElem = document.getElementById(from);
    const toElem = document.getElementById(to);
    if (!fromElem || !toElem) return;

    const fromRect = fromElem.getBoundingClientRect();
    const toRect = toElem.getBoundingClientRect();

    const startX = fromRect.left + fromRect.width / 2;
    const startY = fromRect.top + fromRect.height / 2;
    const endX = toRect.left + toRect.width / 2;
    const endY = toRect.top + toRect.height / 2;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', startX);
    line.setAttribute('y1', startY);
    line.setAttribute('x2', endX);
    line.setAttribute('y2', endY);
    line.setAttribute('stroke', 'green');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('data-from', from);
    line.setAttribute('data-to', to);

    svg.appendChild(line);
}

// Initialize the food web
addSpeciesTiles();

// Example connections (you can customize these):
connectSpecies('White Tail Deer', 'Black Bear');
connectSpecies('Moose', 'Black Bear');
connectSpecies('Opossum', 'Black Bear');
connectSpecies('Fox Squirrel', 'Black Bear');
connectSpecies('Yellow Bellied Sapsucker', 'Black Bear');
connectSpecies('Red Breasted Nuthatches', 'Black Bear');
connectSpecies('Rhododendron', 'Red Breasted Nuthatches');
connectSpecies('Rhododendron', 'Fox Squirrel');
connectSpecies('Rhododendron', 'Opossum');
connectSpecies('Rhododendron', 'Yellow Bellied Sapsucker');
connectSpecies('Rhododendron', 'Old World Porcupine');
connectSpecies('Rhododendron', 'Moose');
connectSpecies('Rhododendron', 'White Tail Deer');
connectSpecies('Mountain Laurel', 'Red Breasted Nuthatches');
connectSpecies('Mountain Laurel', 'Fox Squirrel');
connectSpecies('Mountain Laurel', 'Opossum');
connectSpecies('Mountain Laurel', 'Yellow Bellied Sapsucker');
connectSpecies('Mountain Laurel', 'Old World Porcupine');
connectSpecies('Mountain Laurel', 'Moose');
connectSpecies('Mountain Laurel', 'White Tail Deer');
connectSpecies('Black Bear', 'Bradley Milk Cap');
connectSpecies('Black Bear', 'Jelly Roll Fungus');
connectSpecies('Moose', 'Bradley Milk Cap');
connectSpecies('Moose', 'Jelly Roll Fungus');
connectSpecies('Old World Porcupine', 'Bradley Milk Cap');
connectSpecies('Old World Porcupine', 'Jelly Roll Fungus');

// Function to remove species and associated connections
function removeSpecies() {
    const speciesToRemove = prompt('Enter the species name to remove:');
    if (!speciesToRemove) {
        alert('Please enter a species name.');
        return;
    }

    const removedSpecies = document.getElementById(speciesToRemove.toLowerCase());
    if (!removedSpecies) {
        alert('Species not found.');
        return;
    }

    removedSpecies.remove();
    removeConnections(speciesToRemove.toLowerCase());
    alert('Species removed successfully.');
}

function removeConnections(speciesToRemove) {
    const connections = svg.querySelectorAll(`[data-from="${speciesToRemove}"], [data-to="${speciesToRemove}"]`);
    connections.forEach(conn => conn.remove());
}
