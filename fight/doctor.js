const Unit = require('./unit');

function Doctor(){
    Unit.apply(this, arguments);
    this._healPower = 10;
}

Doctor.prototype = new Unit();

Doctor.prototype.heal = function (unit) {

    let bonusAttack = (this._level > 1) ? (this._level * 0.1) : 0;

   // let healthBefore = unit.getHealth();
    unit.addHealth(this._healPower + bonusAttack);
   // let healthAfter = unit.getHealth();

    unit._earnExperience(250);
    this._earnExperience(250);

    //exact damage taken
    //return healthAfter - healthBefore;

    return (this._healPower + bonusAttack);
}

module.exports =  Doctor;
