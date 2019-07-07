const Unit = require('./unit');

function Soldier() {
    Unit.apply(this, arguments);
    this._attackPower = 15;
}
Soldier.prototype = new Unit();

Soldier.prototype.handAttack = function(unit){

    let bonusAttack = (this._level > 1) ? (this._level * 0.1) : 0;
    unit.takeDamage(this._attackPower + bonusAttack);
    this._earnExperience(250);
    return this._attackPower + bonusAttack;
}

module.exports = Soldier;
