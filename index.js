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

