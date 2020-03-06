// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();


class Ninja {  // #1
  constructor (name, health, speed, strength){
    this.name = name;  // #2
    this.health = health;  // #3
    this.speed = 3;  // #4
    this.strength = 3;  // #5
  }

  sayName() {  // #6
    console.log(this.name);
  }

  showStats() {  // #7
    console.log('Name:' + this.name, 'Strength:' + this.strength, 'Speed:' + this.speed, 'Health:' + this.health);
  }

  drinkSake() {  // #8
    this.health += 10;
  }
}


const ninja1 = new Ninja("Hyabusa", 50);

console.log(ninja1)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
