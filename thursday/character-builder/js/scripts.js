// Business Logic

function addStrength(species, weapon, armor) {
    return species + weapon + armor;
}

function addAttack(species, weapon) {
    return species + weapon;
}

function addDefense(species, armor) {
    return species + armor;
}

function addCharisma(species, gender) {
    return species + gender;
}


function calculate(species, weapon, armor, gender, operator) {
    if (operator === "addStrength") {
        return addStrength(species, weapon, armor);
    } else if (operator === "addAttack") {
        return addAttack(species, weapon);
    } else if (operator === "addDefense") {
        return addDefense(species, armor);
    } else if (operator === "addCharisma") {
        return addCharisma(species, gender);
    }
}

// UI Logic

function calculateStats(e) {
    e.preventDefault();
    const species = parseInt(document.getElementById("species").value);
    const weapon = parseInt(document.getElementById("weapon-choice").value);
    const armor = parseInt(document.getElementById("armor").value);
    const gender = parseInt(document.getElementById("gender").value.length);
    console.log(gender);
    console.log()
    if (species && weapon && armor && gender) {
        document.getElementById("species_armor_weapon_strength").innerText = calculate(species, weapon, armor, gender, "addStrength");
        document.getElementById("species_weapon_attack").innerText = calculate(species, weapon, armor, gender, "addAttack");
        document.getElementById("species_armor_defense").innerText = calculate(species, weapon, armor, gender, "addDefense");
        document.getElementById("armor_gender_charisma").innerText = calculate(species, weapon, armor, gender, "addCharisma");
    } else {
        window.alert("Hey YOu Gotta Fill it Out!");
    }
};
window.addEventListener("load", function () {
    const form = document.getElementById("character-input");
    form.addEventListener("submit", calculateStats)
});

