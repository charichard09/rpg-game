export default class Character {
  constructor(type, inventory) {
    this.type = type;
    this.strength = 0;
    this.intelligence = 0;
    this.agility = 0;
    this.inventory = inventory;
    this.inventorySpace = 0;
  }

  // defaultInventory() {
  //   alienInv = {space gun, space suit}

  //   if this.type === alien {
  //     this.inventory = alienInv
  //   }
  // }
}