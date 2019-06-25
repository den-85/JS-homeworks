const Soldier = require('./soldier');
const Doctor = require('./doctor');
const Heavy = require('./heavy');

doc = new Doctor('Greg House');
soldier = new Soldier('Jackie Chan');
heavySoldier = new Heavy('John Wick');


let round = 1, attacker, defender, looser, damage;
while(heavySoldier.isAlive() && soldier.isAlive()){

    if(round%2){
        attacker = soldier;
        defender = heavySoldier;
    }else{
        attacker = heavySoldier;
        defender = soldier;
    }

    console.log("\n>>>> Round " + round + ":");
    console.log("[Attacker stats: name " + attacker.getName() + ", health " + attacker.getHealth().toFixed(2) +
        ", level " + attacker.getLevel()+", xp = "+attacker.getXP().toFixed(2)+"]");
    console.log("[Defender stats: name " + defender.getName() + ", health " + defender.getHealth().toFixed(2) +
        ", level " + defender.getLevel()+", xp = "+defender.getXP().toFixed(2)+"]");

    if(round%3 === 0){
        looser = attacker.getHealth() < defender.getHealth() ? attacker: defender;
        console.log('+ Medic ' + doc.getName() + ' healed '+looser.getName()+' for ' + doc.heal(looser).toFixed(2) + " hp");
    }

    if (typeof attacker.machineGunAttack === "function") {
        damage = attacker.machineGunAttack(defender, attacker.getLevel());
    }else{
        damage = attacker.handAttack(defender);
    }

    console.log('\n> '+attacker.getName() + ' attacked '+defender.getName()+' and applied ' + damage.toFixed(2) + ' hp damage');
    round++;
}
let winnerName = heavySoldier.isAlive()? heavySoldier.getName() : soldier.getName();

console.log("Winner is " + winnerName + "!");
