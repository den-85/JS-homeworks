const Soldier = require('./soldier');
const Unit = require('./unit');

function Heavy() {
    Unit.apply(this, arguments);
    this._resist = 20;
}
Heavy.prototype = new Soldier();

Heavy.prototype.machineGunAttack = function(unit, noOfShots){

    let bonusAttack, damage = 0, healthBefore, healthAfter;

    for(let index = 0; index < noOfShots; index++) {
        bonusAttack = (this._level > 1) ? (this._level * 0.1) : 0;
        healthBefore = unit.getHealth();
        unit.takeDamage(this._attackPower + bonusAttack);
        healthAfter = unit.getHealth();
        damage += healthBefore - healthAfter;
    }

    this._earnExperience(250);

    return damage;
}

Heavy.prototype.takeDamage = function (amount) {
    amount = amount * (100 - this._resist)/100;
    Unit.prototype.takeDamage.call(this, amount);
}

module.exports = Heavy;
