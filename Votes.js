document.getElementById('GojoLink').addEventListener('click', function(event) {
    const VotedGojo = new CustomEvent('linkClicked');
    document.dispatchEvent(VotedGojo);
});

document.getElementById('SukunaLink').addEventListener('click', function(event) {
    const VotedSukuna = new CustomEvent('linkClicked');
    document.dispatchEvent(VotedSukuna);
});
