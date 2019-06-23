function Unit(name) {
    this.maxHealth = 100;
    this.health = this.maxHealth;
    this.name =  name;
    this.level = 1;
    this.xp = 0;
}
Unit.prototype.getName = function(){
    return this.name;
}

Unit.prototype.getLevel = function () {
    return this.level;
}
Unit.prototype.isAlive = function () {
    return !!this.health;
}
Unit.prototype.addHealth = function (amount) {
    if (this.health + Number(amount) > this.maxHealth)
        this.health = this.maxHealth ;
    else
        this.health += Number(amount);
}

Unit.prototype.earnExperience = function (amount) {


    let bonusXP = (this.level > 1) ? (amount - amount / this.level * 0.1) : amount;


    if (this.xp + bonusXP > 1000){

        while (bonusXP > 1000) {
            this.levelUp();
            bonusXP -= 1000;
        }
        this.levelUp();
        this.xp = Number(bonusXP);
    }
    else{
        this.xp += Number(bonusXP);
    }

}

Unit.prototype.takeDamage = function (amount) {
    if (this.health - amount > 0)
        this.health -= amount;
    else
        this.health = 0;
    this.earnExperience(500);
}

Unit.prototype.levelUp = function () {
    this.level += 1;
    console.log("- fighter " + this.name + " has reached level " + this.level);
}



//---------------------------------------------
Unit.prototype.getHealth = function(){
    return this.health;
}
Unit.prototype.getXP = function(){
    return this.xp;
}

module.exports =  Unit;