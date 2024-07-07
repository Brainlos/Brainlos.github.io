document.addEventListener('voteGojo', function() {
    let gojoVotes = parseInt(localStorage.getItem('GojoVotes'), 10);
    gojoVotes += 1;
    localStorage.setItem('GojoVotes', gojoVotes.toString());
});

// Handle Sukuna votes
document.addEventListener('voteSukuna', function() {
    let sukunaVotes = parseInt(localStorage.getItem('SukunaVotes'), 10);
    sukunaVotes += 1;
    localStorage.setItem('SukunaVotes', sukunaVotes.toString());
});
