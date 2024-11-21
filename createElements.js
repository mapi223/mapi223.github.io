const classArray = ["deathKnight", "demonHunter", "druid", "evoker", "hunter", "mage", "monk", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"];
const classArrayWithSpacesAndCaps = ["Death Knight", "Demon Hunter", "Druid", "Evoker", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"];

const Player1Array = [];
const Player2Array = [];
const Player3Array = [];
const Player4Array = [];
const Player5Array = [];
const players = [Player1Array, Player2Array, Player3Array, Player4Array, Player5Array];

const toggleClassSelection = (source) => {
    const button = source.srcElement;
    const playerNum = button.parentElement.parentElement.id[6];
    if (button.getAttribute('flag') === 'false') {
        button.classList.add('active')
        button.setAttribute("flag", 'true');
        players[playerNum - 1].push(button.classList[1]);
    }
    else if (button.getAttribute('flag') === 'true') {
        players[playerNum - 1].splice(players[playerNum - 1].indexOf(button.classList[1]), 1);
        button.classList.remove('active');
        button.setAttribute("flag", 'false');
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
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            changePlayerName(event);
        }
    });
    form.appendChild(input);
    const button = document.createElement('button');
    button.innerHTML = "Enter";
    button.className = 'PlayerName';
    button.type = "button"
    button.onclick = changePlayerName;
    form.appendChild(button);
    const lineBreak = document.createElement('p');
    lineBreak.id = "lineBreak";
    lineBreak.innerHTML = '<br>';
    form.appendChild(lineBreak);
    const div = document.createElement('div');
    div.id = "buttonContainer";
    div.className = "buttonContainer";
    form.appendChild(div);
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
    document.body.children[2].children[index].children[4].appendChild(button);
    button.classList.add("classButton");
    button.onclick = toggleClassSelection;
    button.setAttribute("flag", "false");

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

