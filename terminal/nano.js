Mousetrap.bind('alt+x', (e) => {
    document.getElementById('editor').setAttribute('class', 'hidden');
    document.getElementById('terminal').setAttribute('class', '');   
    document.querySelector("#termIn").focus();
});

Mousetrap.bind('alt+s', (e) => {
    document.getElementById('editormessage').innerText += 'Saved';
});