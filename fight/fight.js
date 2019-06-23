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

    console.log("\n>>>>Round " + round + ":");
    console.log("[Attacker stats: name " + attacker.getName() + ", health " + attacker.getHealth() + ", level " + attacker.getLevel()+", xp = "+attacker.getXP()+"]");
    console.log("[Defender stats: name " + defender.getName() + ", health " + defender.getHealth() + ", level " + defender.getLevel()+", xp = "+defender.getXP()+"]");

    if(round%3 === 0){
        looser = attacker.getHealth() < defender.getHealth() ? attacker: defender;
        console.log('Medic ' + doc.getName() + ' healed '+looser.getName()+' for ' + doc.heal(looser) + " hp");
    }

    if (attacker.hasOwnProperty('attackPower')) {
        damage = attacker.handAttack(defender);
    }else{
        damage = attacker.machineGunAttack(defender, attacker.getLevel());
    }

    console.log('\n'+attacker.getName() + ' attacked '+defender.getName()+' and applied damage ' + damage + ' hp');
    round++;
}
let winnerName = heavySoldier.isAlive()? heavySoldier.getName() : soldier.getName();

console.log("Winner is " + winnerName + "!");