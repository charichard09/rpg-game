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
    let scientistInv = {
      armor: 'force shield'
    };
    
    if (this.type === 'alien') {
      this.inventory = alienInv;
    } else if (this.type === 'scientist') {
      this.inventory = scientistInv;
    }
  }
  // defaultInventory() {
  //   alienInv = {space gun, space suit}

  //   if this.type === alien {
  //     this.inventory = alienInv
  //   }
  // }
}