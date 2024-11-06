function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hunter = classDamageOnlyPickSpec = () => {
    const specChooser = getRandomNumber(1, 3);
    if (specChooser == 1) {
        return "Beast Mastery"
    }
    else if (specChooser == 2) {
        return "Marksmen"
    }
    else {
        return "Survival"
    }
}

const mage = classDamageOnlyPickSpec = () => {
    const specChooser = getRandomNumber(1, 3);
    if (specChooser == 1) {
        return "Arcane"
    }
    else if (specChooser == 2) {
        return "Fire"
    }
    else {
        return "Frost"
    }
}

const rogue = classDamageOnlyPickSpec = () => {
    const specChooser = getRandomNumber(1, 3);
    if (specChooser == 1) {
        return "Assassination"
    }
    else if (specChooser == 2) {
        return "Outlaw"
    }
    else {
        return "Subtlety"
    }
}

const warlock = classDamageOnlyPickSpec = () => {
    const specChooser = getRandomNumber(1, 3);
    if (specChooser == 1) {
        return "Affliction"
    }
    else if (specChooser == 2) {
        return "Demonology"
    }
    else {
        return "Destruction"
    }
}

const deathKnight = classDamageAndTankPickSpec = (needTank) => {
    if (needTank) {
        return "Blood"
    }
    else {
        const specChooser = getRandomNumber(1, 2);
        if (specChooser == 1) {
            return "Frost"
        }
        else {
            return "Unholy"
        }
    }
}

const demonHunter = classDamageAndTankPickSpec = (needTank) => {
    if (needTank) {
        return "Vengeance"
    }
    else {

        return "Havoc"
    }
}

const warrior = classDamageAndTankPickSpec = (needTank) => {
    if (needTank) {
        return "Protection"
    }
    else {
        const specChooser = getRandomNumber(1, 2);
        if (specChooser == 1) {
            return "Arms"
        }
        else {
            return "Fury"
        }
    }
}

const evoker = classDamageAndHealerPickSpec = (needHeals) => {
    if (needHeals) {
        return "Preservation"
    }
    else {
        const specChooser = getRandomNumber(1, 2);
        if (specChooser == 1) {
            return "Augmentation"
        }
        else {
            return "Devestation"
        }
    }
}

const priest = classDamageAndHealerPickSpec = (needHeals) => {
    if (!needHeals) {
        return "Shadow"
    }
    else {
        const specChooser = getRandomNumber(1, 2);
        if (specChooser == 1) {
            return "Discipline"
        }
        else {
            return "Holy"
        }
    }
}

const shaman = classDamageAndHealerPickSpec = (needHeals) => {
    if (needHeals) {
        return "Restoration"
    }
    else {
        const specChooser = getRandomNumber(1, 2);
        if (specChooser == 1) {
            return "Enhance"
        }
        else {
            return "Elemental"
        }
    }
}

const druid = classDamageAndHealerAndTankPickSpec = (needHeals, needTank) => {
    if (needHeals) {
        return "Restoration"
    }
    else if (needTank) {
        return "Guardian"
    }
    else {
        const specChooser = getRandomNumber(1, 2);
        if (specChooser == 1) {
            return "Balance"
        }
        else {
            return "Feral"
        }
    }
}

const monk = classDamageAndHealerAndTankPickSpec = (needHeals, needTank) => {
    if (needHeals) {
        return "Mistweaver"
    }
    else if (needTank) {
        return "Brewmaster"
    }
    else {

        return "Windwalker"
    }
}

const paladin = classDamageAndHealerAndTankPickSpec = (needHeals, needTank) => {
    if (needHeals) {
        return "Holy"
    }
    else if (needTank) {
        return "Protection"
    }
    else {

        return "Retribution"
    }
}


const validComp = (theGroup) => {
    if (theGroup.length != 5) {
        return [false, false];
    }

    let numHealersPossible = 0;
    let numTanksPossible = 0;

    let tankList = [];
    let healerList = [];
    let tank;
    let healer;
    for (let index = 0; index < theGroup.length; index++) {
        const className = theGroup[index];
        if (className == "Paladin" || className == "Warrior" || className == "Monk" || className == "Druid" || className == "Death Knight" || className == "Demon Hunter") {
            numTanksPossible++;
            tankList.push(className);
        }
    }
    if (tankList == 0) {
        return [false, false];
    }
    tank = tankList[getRandomNumber(0, tankList.length - 1)]
    let personInGroup = theGroup.indexOf(tank);
    if (personInGroup > -1) { // only splice array when item is found
        theGroup.splice(personInGroup, 1); // 2nd parameter means remove one item only
    }
    for (let index = 0; index < theGroup.length; index++) {
        const className = theGroup[index];
        if (className == "Paladin" || className == "Evoker" || className == "Monk" || className == "Druid" || className == "Priest" || className == "Shaman") {
            numHealersPossible++;
            healerList.push(className);
        }
    }
    if (healerList == 0) {
        return [false, false];
    }
    healer = healerList[getRandomNumber(0, healerList.length - 1)]
    personInGroup = theGroup.indexOf(healer);
    if (personInGroup > -1) { // only splice array when item is found
        theGroup.splice(personInGroup, 1); // 2nd parameter means remove one item only
    }
    return [healer, tank];
}

const groupSpecPicker = (group) => {
    const [tank, healer] = validComp(group);
    if (tank == false) {
        return "not a valid comp"
    }
    else {
        return "yay"
    }
}


const button1 = document.createElement("button");
document.body.appendChild(button1);
button1.textContent = "run the roulette";
button1.onclick = onbuttonclicked;

function onbuttonclicked() {
    const inputElement1 = document.getElementById("input1");
    const inputValue1 = inputElement1.value;
    const inputElement2 = document.getElementById("input2");
    const inputValue2 = inputElement2.value;
    const inputElement3 = document.getElementById("input3");
    const inputValue3 = inputElement3.value;
    const inputElement4 = document.getElementById("input4");
    const inputValue4 = inputElement4.value;
    const inputElement5 = document.getElementById("input5");
    const inputValue5 = inputElement5.value;


    const group = [inputValue1, inputValue2, inputValue3, inputValue4, inputValue5];
    console.log(groupSpecPicker(group))
}