const speciesData = [
    { id: 'plants', class: 'plants', x: 250, y: 100 },
    { id: 'herbivores', class: 'herbivores', x: 400, y: 250 },
    { id: 'carnivores', class: 'carnivores', x: 300, y: 400 },
    { id: 'fungus', class: 'fungus', x: 100, y: 300 },
    // Add more species data as needed
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
connectSpecies('plants', 'herbivores');
connectSpecies('herbivores', 'carnivores');
connectSpecies('carnivores', 'fungus');
connectSpecies('plants', 'fungus');

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
