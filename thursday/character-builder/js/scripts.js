function addStrength(species, weapon, armor) {
    return species + weapon + armor;
}

function addAttack(species, weapon, attack) {
    return species + weapon;
}

function addDefense()
const species = parseInt(document.getElementById("species").value);
const weapon = parseInt(document.getElementById("weapon-choice").value);
const armor = parseInt(document.getElementById("armor").value);
const gender = parseInt(document.getElementById("gender").innerText.length);

document.getElementById("species_armor_weapon_strength").innerText = addStrength;
document.getElementById("species_weapon_attack").innerText = addAttack;
document.getElementById("specues_armor_defense").innerText = 