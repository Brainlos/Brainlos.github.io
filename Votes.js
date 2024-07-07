localStorage.setItem('GojoVotes', '0');
localStorage.setItem('SukunaVotes', '0');

document.getElementById('GojoLink').addEventListener('click', function(VotedGojo) {
    let GojoPlus = GojoVotes + 1;
    localStorage.setItem('GojoVotes', GojoPlus.toString());
});

document.addEventListener('VotedSukuna').addEventListener('click', function(VotedSukuna) {
    let SukunaPlus = SukunaVotes + 1;
    localStorage.setItem('SukunaVotes', SukunaPlus.toString());
});
