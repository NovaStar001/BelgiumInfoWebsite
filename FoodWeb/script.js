const species = document.querySelectorAll('.species');
const svg = document.getElementById('connections-svg');

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

// Example connections (you can customize these):
connectSpecies('plants', 'herbivores');
connectSpecies('herbivores', 'carnivores');
connectSpecies('carnivores', 'fungus');
connectSpecies('plants', 'fungus');
