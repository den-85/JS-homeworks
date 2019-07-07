function Unit(name) {
    this.MAXHEALTH = 100;// more fun with 1000
    this._health = this.MAXHEALTH;
    this._name =  name;
    this._level = 1;
    this._xp = 0;
}
Unit.prototype.getName = function(){
    return this._name;
}

Unit.prototype.getLevel = function () {
    return this._level;
}
Unit.prototype.isAlive = function () {
    return !!this._health;
}
Unit.prototype.addHealth = function (amount) {
    if (this._health + Number(amount) > this.MAXHEALTH)
        this._health = this.MAXHEALTH ;
    else
        this._health += Number(amount);
}

Unit.prototype._earnExperience = function (amount) {


    let bonusXP = (this.getLevel() > 1) ? (amount - amount / this.getLevel() * 0.1) : amount;


    if (this.getXP() + bonusXP > 1000){

        while (bonusXP > 1000) {
            this._levelUp();
            bonusXP -= 1000;
        }
        this._levelUp();
        this._xp = Number(bonusXP);
    }
    else{
        this._xp += Number(bonusXP);
    }

}

Unit.prototype.takeDamage = function (amount) {

    if (this._health - amount > 0)
        this._health -= amount;
    else
        this._health = 0;
    this._earnExperience(500);
}

Unit.prototype._levelUp = function () {
    this._level += 1;
    console.log("- fighter " + this._name + " has reached level " + this._level);
}



//---------------------------------------------
Unit.prototype.getHealth = function(){
    return this._health;
}
Unit.prototype.getXP = function(){
    return this._xp;
}

module.exports =  Unit;
