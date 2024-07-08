if (localStorage.getItem('GojoVotes') === null) {
    localStorage.setItem('GojoVotes', '0');
}
if (localStorage.getItem('SukunaVotes') === null) {
    localStorage.setItem('SukunaVotes', '0');
}

let hasVoted = localStorage.getItem('hasVoted') === 'true';

function vote(character) {
    let previousVote = currentVote;
    currentVote = character;
    localStorage.setItem('currentVote', currentVote);

    if (previousVote) {
        let previousVotesKey = previousVote === 'Gojo' ? 'GojoVotes' : 'SukunaVotes';
        let previousVotes = parseInt(localStorage.getItem(previousVotesKey), 10);
        previousVotes -= 1;
        localStorage.setItem(previousVotesKey, previousVotes.toString());
    }

    let votesKey = character === 'Gojo' ? 'GojoVotes' : 'SukunaVotes';
    let votes = parseInt(localStorage.getItem(votesKey), 10);
    votes += 1;
    localStorage.setItem(votesKey, votes.toString());

    // Inform the user their vote was counted
    alert(`Your vote for ${character} has been counted!`);
}

document.getElementById('VoteGojo').addEventListener('click', function(event) {
    event.preventDefault(); 
    vote(Gojo)
});

document.getElementById('VoteSukuna').addEventListener('click', function(event) {
    event.preventDefault();
    vote(Sukuna)
});

updateLinks();
