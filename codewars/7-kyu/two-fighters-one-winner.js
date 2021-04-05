/* 
https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

7 kyu
Two fighters, one winner.

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

// Verbose soln
function declareWinner(fighter1, fighter2, firstAttacker) {
  if (firstAttacker === fighter1.name) {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack
      if (fighter2.health > 0) {
      fighter1.health -= fighter2.damagePerAttack
      }
    }
    return fighter1.health > 0 ? fighter1.name : fighter2.name
  } else {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter1.health -= fighter2.damagePerAttack
      if (fighter1.health > 0) {
        fighter2.health -= fighter1.damagePerAttack
      }
    }
    return fighter1.health > 0 ? fighter1.name : fighter2.name
  }
}

// Slightly shorter
function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    if (firstAttacker === fighter1.name) {
      fighter2.health -= fighter1.damagePerAttack
      if (fighter2.health > 0) {
        fighter1.health -= fighter2.damagePerAttack
      }
    } else {
        fighter1.health -= fighter2.damagePerAttack
        if (fighter1.health > 0) {
          fighter2.health -= fighter1.damagePerAttack
        }
    }
  }
    return fighter1.health > 0 ? fighter1.name : fighter2.name
}

// Semantically clear
function declareWinner(fighter1, fighter2, firstAttacker) {
  const isNotDead = (fighter) => fighter.health > 0
  const executeAttack = (fighter) => fighter.name === fighter1.name ? fighter2.health -= fighter1.damagePerAttack : fighter1.health -= fighter2.damagePerAttack
  while (isNotDead(fighter1) && isNotDead(fighter2)) {
    if (firstAttacker === fighter1.name) {
      executeAttack(fighter1)
      if (isNotDead(fighter2)) {
        executeAttack(fighter2)
      }
    } else {
      executeAttack(fighter2)
      if (isNotDead(fighter1)) {
        executeAttack(fighter1)
      }
    }
  }
  return isNotDead(fighter1)? fighter1.name : fighter2.name
}