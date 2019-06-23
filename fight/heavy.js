const Soldier = require('./soldier');
const Unit = require('./unit');

function Heavy() {
    Unit.apply(this, arguments);
    this.resist = 20;
}
Heavy.prototype = new Soldier();

Heavy.prototype.machineGunAttack = function(unit, noOfShots){
    let bonusAttack, damage = 0, healthBefore, healthAfter;

    for(let index = 0; index < noOfShots; index++) {
        bonusAttack = (this.level > 1) ? (this.level * 0.1) : 0;
        healthBefore = unit.getHealth();
        unit.takeDamage(this.attackPower + bonusAttack);
        healthAfter = unit.getHealth();
        damage += healthBefore - healthAfter;
    }

    this.earnExperience(250);

    return damage;
}

Heavy.prototype.takeDamage = function (amount) {
    amount = amount * (100 - this.resist)/100;

    if (this.health - Number(amount) > 0)
        this.health -= Number(amount) ;
    else
        this.health = 0;
    let bonusXP = (this.level > 1) ? (500 - 500 / this.level * 0.1) : 500;
    this.earnExperience(bonusXP);
}

module.exports = Heavy;