// Character creation: 

import Character from './../src/js/character-creation.js';

describe('Character', () => {

  test('1. It should create a new character with type of scientist', () => {
    const newCharacter = new Character('scientist');
    expect(newCharacter.type).toEqual('scientist');
  });

  test('2. It should create a new character with type of alien', () => {
    const newCharacter = new Character('alien');
    expect(newCharacter.type).toEqual('alien');
  });

  test('3. It should create a new character with type of soldier', () => {
    const newCharacter = new Character('soldier');
    expect(newCharacter.type).toEqual('soldier');
  });

  test('4. It should create a new character with attributes strength, intelligence, agility', () => {
    const newCharacter = new Character('soldier');
    expect(newCharacter.strength).toEqual(0);
    expect(newCharacter.intelligence).toEqual(0);
    expect(newCharacter.agility).toEqual(0);
  });

  test('5. It should create a new character with inventory and inventory space', () => {
    const newCharacter = new Character('soldier');

    expect(newCharacter.inventory).toEqual({});
    expect(newCharacter.inventorySpace).toEqual(0);
  });

  //defaultInventory()
  test('6. It will create a default inventory for alient class', () => {
    const newCharacter = new Character('alien');
    newCharacter.defaultInventory();
    expect(newCharacter.inventory).toEqual({weapon: {itemName: 'space gun', trait: '2 strength'}});
  });

  test('7. It will create a default inventory for scientist class', () => {
    const newCharacter = new Character('scientist');
    newCharacter.defaultInventory();
    expect(newCharacter.inventory).toEqual({armor: {itemName: 'force shield', trait: '2 intelligence'}});
  });

  test('8. It will create a default inventory for soldier class', () => {
    const newCharacter = new Character('soldier');
    newCharacter.defaultInventory();
    expect(newCharacter.inventory).toEqual({weapon: {itemName: 'rifle', trait: '2 agility'}});
  });

  test('9. It will create a default inventory for no class selected', () => {
    const newCharacter = new Character('');
    newCharacter.defaultInventory();
    expect(newCharacter.inventory).toMatchObject({});
  });

  test('10. It should create a new character with level 1 with 10 coins', () => {
    const newCharacter = new Character('soldier');

    expect(newCharacter.coins).toEqual(10);
    expect(newCharacter.level).toEqual(1);
  });

  //applyTrait()
  test('11. It should apply the +2 intelligence to new character attribute', () => {
    let newCharacter = new Character('scientist');
    newCharacter.defaultInventory();
    newCharacter.addTrait();
    expect(newCharacter.intelligence).toEqual(2);
  });

  test('12. It should apply the +2 strength to new character attribute', () => {
    let newCharacter = new Character('alien');
    newCharacter.defaultInventory();
    newCharacter.addTrait();
    expect(newCharacter.strength).toEqual(2);
  });

  test('13. It should apply the +2 agility to new character attribute', () => {
    let newCharacter = new Character('soldier');
    newCharacter.defaultInventory();
    newCharacter.addTrait();
    expect(newCharacter.agility).toEqual(2);
  });

  //dropItem()
  test('13. It will delete an item from inventory', () => {
    let newCharacter = new Character('soldier');
    newCharacter.defaultInventory();
    newCharacter.dropItem();
    expect(newCharacter.inventory).toEqual({});
  });

  test('14. It will delete an item from inventory', () => {
    let newCharacter = new Character('alien');
    newCharacter.defaultInventory();
    newCharacter.dropItem();
    expect(newCharacter.inventory).toEqual({});
  });

});





// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

// });