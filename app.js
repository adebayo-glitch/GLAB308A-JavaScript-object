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

 