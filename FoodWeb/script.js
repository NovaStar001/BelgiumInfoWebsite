const species = document.querySelectorAll('.species');

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
    alert('Species removed successfully.');
}
