document.getElementById('myLink').addEventListener('click', function(event) {
    const event = new CustomEvent('linkClicked');
    document.dispatchEvent(event);
});
