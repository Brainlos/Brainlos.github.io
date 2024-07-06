localStorage.setItem('GojoVotes', '0');
localStorage.setItem('SukunaVotes', '0');

document.addEventListener('VotedGojo', function(event) {
    let GojoPlus = GojoVotes + 1;
    localStorage.setItem('GojoVotes', GojoPlus.toString());
});

document.addEventListener('VotedSukuna', function(event) {
    let SukunaPlus = SukunaVotes + 1;
    localStorage.setItem('SukunaVotes', SukunaPlus.toString());
});
