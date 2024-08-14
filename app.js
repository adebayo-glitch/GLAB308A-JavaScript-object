// <!-- part 1 -->
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"],
      },
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}`);
    },
  };
  
  // loop through inventory
  for (let item of adventurer.inventory) {
    console.log(item);
  }
  
  // call roll method
  adventurer.roll();
  adventurer.roll(5);

  
//   part 2

class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
     roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // call roll method for Robin and companions
  robin.roll();
  robin.companion.roll();
  robin.companion.companion.roll();

  // Part 3
  class Adventurer extends Character {
    constructor(name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    // Additional method
    sleep() {
        console.log(`${this.name} is sleeping.`);
        this.health = Math.min(100, this.health + 10);
      }
  }
  
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }

    // Companion specific method
    comfort(character) {
        console.log(`${this.name} the ${this.type} comforts ${character.name}.`);
        character.health = Math.min(100, character.health + 5);
    }
  }
  
  const robinAdventurer = new Adventurer("Robin", "Fighter");
  robinAdventurer.inventory.push("sword", "potion", "artifact");
  robinAdventurer.companion = new Companion("Leo", "Cat");
  robinAdventurer.companion.companion = new Companion("Frank", "Flea");
  robinAdventurer.companion.companion.inventory = ["small hat", "sunglasses"];
  
  // run the scout method
  robinAdventurer.scout();
  robinAdventurer.sleep();