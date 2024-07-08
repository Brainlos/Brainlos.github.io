if (localStorage.getItem('GojoVotes') === null) {
    localStorage.setItem('GojoVotes', '0');
}
if (localStorage.getItem('SukunaVotes') === null) {
    localStorage.setItem('SukunaVotes', '0');
}

function updateLinks() {
    let gojoVotes = localStorage.getItem('GojoVotes') || '0';
    let sukunaVotes = localStorage.getItem('SukunaVotes') || '0';
    document.getElementById('GojoLink').href = `https://brainlos.github.io/Gojo/?gojoVotesSend=${gojoVotes}`;
    document.getElementById('SukunaLink').href = `https://brainlos.github.io/Sukuna/?sukunaVotesSend=${sukunaVotes}`;
}

document.getElementById('GojoLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    let gojoVotes = parseInt(localStorage.getItem('GojoVotes'), 10);
    gojoVotes += 1;
    localStorage.setItem('GojoVotes', gojoVotes.toString());
    updateLinks();
});

document.getElementById('SukunaLink').addEventListener('click', function(event) {
    event.preventDefault();
    let sukunaVotes = parseInt(localStorage.getItem('SukunaVotes'), 10);
    sukunaVotes += 1;
    localStorage.setItem('SukunaVotes', sukunaVotes.toString());
    updateLinks();
});

updateLinks();
