const classArray = ["deathKnight", "demonHunter", "druid", "evoker", "hunter", "mage", "monk", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"];
const classArrayWithSpacesAndCaps = ["Death Knight", "Demon Hunter", "Druid", "Evoker", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"];


const toggleClassSelection = (source) => {
    const button = source.srcElement;
    if (button.id === 'false') {
        button.classList.add('active')
        button.id = 'true';
    }
    else if (button.id === 'true') {
        button.classList.remove('active');
        button.id = 'false';
    }
}


const fillForm = (index) => {
    const form = document.createElement('form');
    form.id = 'player' + (index + 1) + 'Form';
    form.className = "inputForms";
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Player ' + (index + 1);
    form.appendChild(h3);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter Player Name';
    input.id = "StopYellingAtMe";
    form.appendChild(input);
    const button = document.createElement('button');
    button.innerHTML = "Change Player Name!";
    button.className = 'PlayerName';
    button.type = "button"
    button.onclick = changePlayerName;
    form.appendChild(button);
    const lineBreak = document.createElement('p');
    lineBreak.id = "lineBreak";
    lineBreak.innerHTML = '<br>';
    form.appendChild(lineBreak);
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

const createButton = (index) => {
    const button = document.createElement('button');
    button.type = "button"
    document.body.children[2].children[index].appendChild(button);
    button.classList.add("classButton");
    button.onclick = toggleClassSelection;
    button.id = "false";

    return button;
}

const createClassButton = (index, i) => {
    const button = createButton(index);
    button.classList.add(classArray[i]);
    button.innerHTML = classArrayWithSpacesAndCaps[i];
}

const createClassButtons = () => {
    for (let index = 0; index < 5; index++) {
        for (let i = 0; i < 13; i++) {
            createClassButton(index, i);
        }
    }
}

