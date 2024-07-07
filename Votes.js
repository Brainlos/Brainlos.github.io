if (localStorage.getItem('GojoVotes') === null) {
    localStorage.setItem('GojoVotes', '0');
}
if (localStorage.getItem('SukunaVotes') === null) {
    localStorage.setItem('SukunaVotes', '0');
}

// Add event listener for Gojo votes
document.getElementById('GojoLink').addEventListener('click', function() {
    // Dispatch custom event to notify other scripts
    const event = new CustomEvent('voteGojo');
    document.dispatchEvent(event);
});

// Add event listener for Sukuna votes
document.getElementById('SukunaLink').addEventListener('click', function() {
    // Dispatch custom event to notify other scripts
    const event = new CustomEvent('voteSukuna');
    document.dispatchEvent(event);
});
