const Unit = require('./unit');

function Soldier() {
    Unit.apply(this, arguments);
    this.attackPower = 15;
}
Soldier.prototype = new Unit();

Soldier.prototype.handAttack = function(unit){

    let bonusAttack = (this.level > 1) ? (this.level * 0.1) : 0;
    let healthBefore = unit.getHealth();
    unit.takeDamage(this.attackPower + bonusAttack);
    let healthAfter = unit.getHealth();

    this.earnExperience(250);

    return healthBefore - healthAfter;
}

module.exports = Soldier;