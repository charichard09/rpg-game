export default class Character {
  constructor(type) {
    this.level = 1;
    this.type = type;
    this.strength = 0;
    this.intelligence = 0;
    this.agility = 0;
    this.inventory = {};
    this.inventorySpace = 0;
  }

  defaultSetup(){
    let alienInv = {
      weapon: {itemName: 'space gun', trait: '2 strength'},
      coin: 10
    };
    let scientistInv = {
      armor: {itemName: 'force shield', trait: '2 intelligence'},
      coin: 10
    };
    let soldierInv = {
      weapon: {itemName: 'rifle', trait: '2 agility'},
      coin: 10
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

  // invItems.forEach((item) => 
  addTrait() {
    const invItems = Object.keys(this.inventory);
    for (const item of invItems) {
      if (Object.hasOwn(this.inventory[item], 'trait')) {
        const traitArray = this.inventory[item].trait.split(' ');
        if (traitArray[1] === 'strength') {
          this['strength'] += parseInt(traitArray[0]);
        } else if (traitArray[1] === 'intelligence') {
          this['intelligence'] += parseInt(traitArray[0]);
        } else {
          this['agility'] += parseInt(traitArray[0]);
        }
      } else {
        continue;
      }
    }
  }

  dropItem(item) {
    // let invArray = Object.keys(this.inventory);
    delete this.inventory[item];
  }

  //{rock: "This item has no value"}
  //{weapon: {itemName: "rifle", trait: "2 strength"}}
  addItem(item) {    
    const itemArray = Object.entries(item);
    this.inventory[itemArray[0][0]] = itemArray[0][1];
  }
}