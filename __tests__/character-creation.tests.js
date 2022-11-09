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
    const newCharacter = new Character('soldier', {});

    expect(newCharacter.inventory).toEqual({});
    expect(newCharacter.inventorySpace).toEqual(0);
  });

  //defaultInventory() 
  
  test('6. It will create a default inventory for alient class', () => {
    const newCharacter = new Character('alien');
    newCharacter.defaultInventory();
    expect(newCharacter.inventory).toEqual({weapon: "space gun"});
  });

  test('7. It will create a default inventory for scientist class', () => {
    const newCharacter = new Character('scientist');
    newCharacter.defaultInventory();
    expect(newCharacter.inventory).toEqual({armor: "force shield"});
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