const fillForm = (index) => {
    const form = document.createElement('form');
    form.id = 'player' + (index + 1) + 'Form';
    form.className = "inputForms";
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Player ' + (index + 1);
    form.appendChild(h3);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter Player Name'
    form.appendChild(input);
    const button = document.createElement('button');
    button.innerHTML = "Change Player Name!";
    button.className = 'PlayerName';
    button.onclick = changePlayerName;
    form.appendChild(button);
    return form;
}

const changePlayerName = (source) => {
    const button = source.srcElement;
    const nameInput = button.parentElement.children[1].value;
    if (nameInput != "") {
        button.parentElement.children[0].innerHTML = nameInput;
    }
    else {
        //do nothing if input value is blank
    }

}

const createButton = () => {
    const button = document.createElement('button')
}

const createClassButton = () => {
    const button = createButton();
}

const createClassButtons = () => {
    for (let i = 0; i < 13; i++) {
        createClassButtons();
    }
}

