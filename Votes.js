if (localStorage.getItem('GojoVotes') === null) {
    localStorage.setItem('GojoVotes', '0');
}
if (localStorage.getItem('SukunaVotes') === null) {
    localStorage.setItem('SukunaVotes', '0');
}

document.getElementById('GojoLink').addEventListener('click', function(event) {
    event.preventDefault();
    let gojoVotes = parseInt(localStorage.getItem('GojoVotes'), 10);
    gojoVotes += 1;
    localStorage.setItem('GojoVotes', gojoVotes.toString());
    updateLink('GojoLink', gojoVotes);
});

document.getElementById('SukunaLink').addEventListener('click', function(event) {
    event.preventDefault();
    let sukunaVotes = parseInt(localStorage.getItem('SukunaVotes'), 10);
    sukunaVotes += 1;
    localStorage.setItem('SukunaVotes', sukunaVotes.toString());
    updateLink('SukunaLink', sukunaVotes);
});

function updateLink(linkId, votes) {
    document.getElementById(linkId).href = `https://brainlos.github.io/${linkId.split('Link')[0]}/?${linkId.split('Link')[0]}VotesSend=${votes}`;
}
