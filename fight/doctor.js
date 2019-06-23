const Unit = require('./unit');

function Doctor(){
    Unit.apply(this, arguments);
    this.healPower = 10;
}

Doctor.prototype = new Unit();

Doctor.prototype.heal = function (unit) {

    let bonusAttack = (this.level > 1) ? (this.level * 0.1) : 0;

    let healthBefore = unit.getHealth();
    unit.addHealth(this.healPower + bonusAttack);
    let healthAfter = unit.getHealth();

    unit.earnExperience(250);
    this.earnExperience(250);//xp to doc as well

    return healthAfter - healthBefore;
}

module.exports =  Doctor;
