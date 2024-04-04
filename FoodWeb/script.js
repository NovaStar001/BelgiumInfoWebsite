const species = document.querySelectorAll('.species');

function removeSpecies() {
    const speciesToRemove = prompt('Enter the species number to remove (1-5):');
    if (!speciesToRemove || isNaN(speciesToRemove) || speciesToRemove < 1 || speciesToRemove > 5) {
        alert('Please enter a valid species number (1-5).');
        return;
    }

    const speciesIndex = parseInt(speciesToRemove) - 1;
    const removedSpecies = species[speciesIndex];
    if (!removedSpecies) {
        alert('Species not found.');
        return;
    }

    removedSpecies.remove();
    alert('Species removed successfully.');
}
