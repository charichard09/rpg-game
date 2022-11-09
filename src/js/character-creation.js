export default class Character {
  constructor(type) {
    this.level = 1;
    this.type = type;
    this.strength = 0;
    this.intelligence = 0;
    this.agility = 0;
    this.inventory = {};
    this.inventorySpace = 0;
    this.coins = 10;
  }

  defaultInventory(){
    let alienInv = {
      weapon: {itemName: 'space gun', trait: '2 strength'}
    };
    let scientistInv = {
      armor: {itemName: 'force shield', trait: '2 intelligence'}
    };
    let soldierInv = {
      weapon: {itemName: 'rifle', trait: '2 agility'}
    };
    
    if (this.type === 'alien') {
      this.inventory = alienInv;
    } else if (this.type === 'scientist') {
      this.inventory = scientistInv;
    } else if (this.type === 'soldier') {
      this.inventory = soldierInv;
    } else {
      this.inventory = {};
    }
  }
}