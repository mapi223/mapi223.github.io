function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generatePlayerForms = () => {
    const topDiv = document.createElement('div');
    topDiv.className = "flexBox";
    document.body.appendChild(topDiv);
    topDiv.id = "topDiv";
    for (let i = 0; i < 5; i++) {
        topDiv.appendChild(fillForm(i));
    }
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
        return "Protection Warrior"
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
            return "Holy Priest"
        }
    }
}

const shaman = classDamageAndHealerPickSpec = (needHeals) => {
    if (needHeals) {
        return "Restoration Shaman"
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

const getClass = (isTank, isHealer, theClass) => {
    if (isTank) {
        switch (theClass) {
            case "Death Knight":
                return deathKnight(isTank);
                break;
            case "Demon Hunter":
                return demonHunter(isTank);
                break;
            case "Druid":
                return druid(isHealer, isTank);
                break;
            case "Monk":
                return monk(isHealer, isTank);
                break;
            case "Paladin":
                return paladin(isHealer, isTank);
                break;
            case "Warrior":
                return warrior(isTank);
                break;
            default:
                return "Typo in a class name";

        }

    }
    if (isHealer) {
        switch (theClass) {
            case "Druid":
                return druid(isHealer, isTank);
                break;
            case "Evoker":
                return evoker(isHealer);
                break;
            case "Monk":
                return monk(isHealer, isTank);
                break;
            case "Paladin":
                return paladin(isHealer, isTank);
                break;
            case "Priest":
                return priest(isHealer);
                break;
            case "Shaman":
                return shaman(isHealer);
                break;
            default:
                return "Typo in a class name";
        }
    }
    switch (theClass) {
        case "Death Knight":
            return deathKnight(isTank);
            break;
        case "Demon Hunter":
            return demonHunter(isTank);
            break;
        case "Druid":
            return druid(isHealer, isTank);
            break;
        case "Evoker":
            return evoker(isHealer);
            break;
        case "Hunter":
            return hunter();
            break;
        case "Mage":
            return mage();
            break;
        case "Monk":
            return monk(isHealer, isTank);
            break;
        case "Paladin":
            return paladin(isHealer, isTank);
            break;
        case "Priest":
            return priest(isHealer);
            break;
        case "Rogue":
            return rogue();
            break;
        case "Shaman":
            return shaman(isHealer);
            break;
        case "Warlock":
            return warlock();
            break;
        case "Warrior":
            return warrior(isTank);
            break;
        default:
            return "Typo in a class name";
    }
}

const validComp = (theGroup) => {
    let tankList = [];
    let healerList = [];
    let overlapList = [];
    let tank;
    let healer;

    for (let index = 0; index < theGroup.length; index++) {
        const className = theGroup[index];
        if (className == "Paladin" || className == "Warrior" || className == "Monk" || className == "Druid" || className == "Death Knight" || className == "Demon Hunter") {
            if (className == "Paladin" || className == "Monk" || className == "Druid") {
                overlapList.push(className); //logs how many classes overlap on tank and healer in the grp
            }
            tankList.push(className);
        }
    }                                               //these two for loops will determine the possible list of tanks and healers potentially in the group list
    if (tankList == 0) {
        return false;
    }
    for (let index = 0; index < theGroup.length; index++) {
        const className = theGroup[index];
        if (className == "Paladin" || className == "Evoker" || className == "Monk" || className == "Druid" || className == "Priest" || className == "Shaman") {
            healerList.push(className);
        }
    }
    if (healerList == 0) {
        return false;
    }

    if (overlapList.length == 1) { //if there is only 1 overlap between check which has more possible choices, the larger gets the overlapped removed from their pool
        if (tankList.length > healerList.length) {
            const overlappedPerson = tankList.indexOf(overlapList[0]);
            tankList.splice(overlappedPerson, 1);
        }
        else if (healerList.length > tankList.length) {
            const overlappedPerson = healerList.indexOf(overlapList[0]);
            healerList.splice(overlappedPerson, 1);
        }
        else {
            if (tankList.length == 1) {
                return false;
            }
            else {
                const pickWhich = getRandomNumber(1, 101);
                if (pickWhich < 50) {
                    const overlappedPerson = tankList.indexOf(overlapList[0]);
                    tankList.splice(overlappedPerson, 1);
                }
                else {
                    const overlappedPerson = healerList.indexOf(overlapList[0]);
                    healerList.splice(overlappedPerson, 1);
                }
            }
        }

        tank = tankList[getRandomNumber(0, tankList.length - 1)]
        let personInGroup = theGroup.indexOf(tank);
        if (personInGroup > -1) { // only splice array when item is found
            theGroup.splice(personInGroup, 1); // 2nd parameter means remove one item only
        }
    }
    else {
        tank = tankList[getRandomNumber(0, tankList.length - 1)]
        let personInGroup = theGroup.indexOf(tank);
        if (personInGroup > -1) { // only splice array when item is found
            theGroup.splice(personInGroup, 1); // 2nd parameter means remove one item only
        }
        personInGroup = healerList.indexOf(tank);
        if (personInGroup > -1) { // only splice array when item is found
            healerList.splice(personInGroup, 1); // 2nd parameter means remove one item only
        }
    }
    healer = healerList[getRandomNumber(0, healerList.length - 1)]
    personInGroup = theGroup.indexOf(healer);
    if (personInGroup > -1) { // only splice array when item is found
        theGroup.splice(personInGroup, 1); // 2nd parameter means remove one item only
    }

    const tankSpec = getClass(true, false, tank); //invoke for tank and healer
    const healerSpec = getClass(false, true, healer);
    let grpSpec = [];
    grpSpec.push(tankSpec);
    grpSpec.push(healerSpec);
    for (let index = 0; index < theGroup.length; index++) { //invoke for rest of group
        grpSpec.push(getClass(false, false, theGroup[index]));
    }

    return grpSpec;
}

generatePlayerForms();