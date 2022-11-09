export default class Character {
  constructor(type) {
    this.type = type;
    this.strength = 0;
    this.intelligence = 0;
    this.agility = 0;
    this.inventory = {};
    this.inventorySpace = 0;
  }

  defaultInventory(){
    let alienInv = {
      weapon: 'space gun'
    };
    
    if (this.type === 'alien') {
      this.inventory = alienInv;
    }
  }
  // defaultInventory() {
  //   alienInv = {space gun, space suit}

  //   if this.type === alien {
  //     this.inventory = alienInv
  //   }
  // }
}