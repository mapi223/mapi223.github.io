const classArray = ["deathKnight", "demonHunter", "druid", "evoker", "hunter", "mage", "monk", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"];
const classArrayWithSpacesAndCaps = ["Death Knight", "Demon Hunter", "Druid", "Evoker", "Hunter", "Mage", "Monk", "Paladin", "Priest", "Rogue", "Shaman", "Warlock", "Warrior"];

const Player1Array = [];
const Player2Array = [];
const Player3Array = [];
const Player4Array = [];
const Player5Array = [];
const players = [Player1Array, Player2Array, Player3Array, Player4Array, Player5Array];
let groupOrder = [];

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const toggleClassSelection = (source) => {
    const button = source.srcElement;
    const playerNum = button.parentElement.parentElement.id[6];
    if (button.getAttribute('flag') === 'false') {
        button.classList.add('active')
        button.setAttribute("flag", 'true');
        players[playerNum - 1].push(button.innerHTML);
    }
    else if (button.getAttribute('flag') === 'true') {
        players[playerNum - 1].splice(players[playerNum - 1].indexOf(button.innerHTML), 1);
        button.classList.remove('active');
        button.setAttribute("flag", 'false');
    }
}


const fillForm = (index) => {
    const form = document.createElement('form');
    form.id = 'player' + (index + 1) + 'Form';
    form.className = "inputForms";
    if (index == 1 || index == 3) {
        form.classList.add("odd");
    }
    else {
        form.classList.add("even");
    }
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
    lineBreak.className = 'lineBreak';
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

const onRoulletteClick = () => {
    const nameArray = [];
    let dpsNum = 2;
    for (let i = 0; i < 5; i++) {
        nameArray[i] = document.getElementById('player' + (i + 1) + 'Form').children[0].innerHTML;
    }
    const group = (formGroupArray([players[0], players[1], players[2], players[3], players[4]]));
    const groupToBeModified = [];
    group.forEach(player => {
        groupToBeModified.push(player);
    });
    const grpSpec = (validComp(groupToBeModified));
    //const output1 = `${nameArray[0]} is a ${group[0]}, ${nameArray[1]} is a ${group[1]}, ${nameArray[2]} is a ${group[2]}, ${nameArray[3]} is a ${group[3]}, ${nameArray[4]} is a ${group[4]}`;
    //const output2 = '\n' + `Tank: ${grpSpec[0]} Healer: ${grpSpec[1]} The damage: ${grpSpec[2]}, ${grpSpec[3]}, ${grpSpec[4]}`
    //document.getElementById("output1").innerHTML = output1;
    //document.getElementById("output2").innerHTML = output2;
    nameArray.forEach(name => {
        let i = nameArray.indexOf(name);
        if (groupOrder[i] === 'tank') {
            document.getElementById('player' + (1 + i) + 'Form').children[3].innerHTML = group[i] + ' ' + grpSpec[0];
            document.getElementById('player' + (1 + i) + 'Form').children[3].className = (classArray[classArrayWithSpacesAndCaps.indexOf(group[i])]);
            document.getElementById('player' + (1 + i) + 'Form').children[3].classList.add('active');
            document.getElementById('player' + (1 + i) + 'Form').children[3].classList.add('lineBreak');
        }
        else if (groupOrder[i] === 'healer') {
            document.getElementById('player' + (1 + i) + 'Form').children[3].innerHTML = group[i] + ' ' + grpSpec[1];
            document.getElementById('player' + (1 + i) + 'Form').children[3].className = (classArray[classArrayWithSpacesAndCaps.indexOf(group[i])]);
            document.getElementById('player' + (1 + i) + 'Form').children[3].classList.add('active');
            document.getElementById('player' + (1 + i) + 'Form').children[3].classList.add('lineBreak');
        }
        else {
            document.getElementById('player' + (1 + i) + 'Form').children[3].innerHTML = group[i] + ' ' + grpSpec[dpsNum];
            document.getElementById('player' + (1 + i) + 'Form').children[3].className = (classArray[classArrayWithSpacesAndCaps.indexOf(group[i])]);
            document.getElementById('player' + (1 + i) + 'Form').children[3].classList.add('active');
            document.getElementById('player' + (1 + i) + 'Form').children[3].classList.add('lineBreak');
            dpsNum++;
        }
    });
}

const randomClass = (classArray) => {
    return classArray[getRandomNumber(0, classArray.length - 1)];
}

const formGroupArray = (arrayOfChoiceArrays) => {
    const group = [];
    for (let i = 0; i < arrayOfChoiceArrays.length; i++) {
        group.push(randomClass(arrayOfChoiceArrays[i]))
    }
    return group;
}