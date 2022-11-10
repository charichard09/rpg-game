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

  //defaultSetup()
  test('6. It will create a default inventory for alient class', () => {
    const newCharacter = new Character('alien');
    newCharacter.defaultSetup();
    expect(newCharacter.inventory).toEqual({weapon: {itemName: 'space gun', trait: '2 strength'}, coin: 10});
  });

  test('7. It will create a default inventory for scientist class', () => {
    const newCharacter = new Character('scientist');
    newCharacter.defaultSetup();
    expect(newCharacter.inventory).toEqual({armor: {itemName: 'force shield', trait: '2 intelligence'}, coin: 10});
  });

  test('8. It will create a default inventory for soldier class', () => {
    const newCharacter = new Character('soldier');
    newCharacter.defaultSetup();
    expect(newCharacter.inventory).toEqual({weapon: {itemName: 'rifle', trait: '2 agility'}, coin: 10});
  });

  test('9. It will create a default inventory of nothing for no class selected', () => {
    const newCharacter = new Character('');
    newCharacter.defaultSetup();
    expect(newCharacter.inventory).toMatchObject({});
  });

  test('10. It will add a default +5 to int for scientist', () => {
    const newCharacter = new Character('scientist');
    newCharacter.defaultSetup();
    expect(newCharacter.intelligence).toEqual(5);
  });

  test('11. It will add a default +2 to strength for scientist', () => {
    const newCharacter = new Character('scientist');
    newCharacter.defaultSetup();
    expect(newCharacter.strength).toEqual(2);
  });

  test('12. It will add a default +3 to strength for scientist', () => {
    const newCharacter = new Character('scientist');
    newCharacter.defaultSetup();
    expect(newCharacter.agility).toEqual(3);
  });

  test('13. It will add a default +6 to strength for soldier', () => {
    const newCharacter = new Character('soldier');
    newCharacter.defaultSetup();
    expect(newCharacter.strength).toEqual(6);
  });

  test('14. It will add a default +2 to intelligence and agility for soldier', () => {
    const newCharacter = new Character('soldier');
    newCharacter.defaultSetup();
    expect(newCharacter.agility).toEqual(2);
    expect(newCharacter.intelligence).toEqual(2);
  });

  test('15. It will add a default +2 to strength for alien', () => {
    const newCharacter = new Character('alien');
    newCharacter.defaultSetup();
    expect(newCharacter.strength).toEqual(2);
  });


  //applyTrait()
  test('10. It should apply the +2 intelligence to new character attribute', () => {
    let newCharacter = new Character('scientist');
    newCharacter.defaultSetup();
    newCharacter.addTrait();
    expect(newCharacter.intelligence).toEqual(7);
  });

  test('11. It should apply the +2 strength to new character attribute', () => {
    let newCharacter = new Character('alien');
    newCharacter.defaultSetup();
    newCharacter.addTrait();
    expect(newCharacter.strength).toEqual(4);
  });

  test('12. It should apply the +2 agility to new character attribute', () => {
    let newCharacter = new Character('soldier');
    newCharacter.defaultSetup();
    newCharacter.addTrait();
    expect(newCharacter.agility).toEqual(4);
  });

  //dropItem(item)
  test('13. It will delete an item from inventory', () => {
    let newCharacter = new Character('soldier');
    newCharacter.defaultSetup();
    newCharacter.dropItem('weapon');
    expect(newCharacter.inventory).toEqual({coin: 10});
  });

  test('14. It will delete an item from inventory', () => {
    let newCharacter = new Character('alien');
    newCharacter.defaultSetup();
    newCharacter.dropItem('weapon');
    expect(newCharacter.inventory).toEqual({coin: 10});
  });

  test('15. It will delete an "rock" item from inventory', () => {
    let newCharacter = new Character('alien');
    newCharacter.defaultSetup();
    newCharacter.inventory.rock = "This item has no value";
    newCharacter.dropItem('rock');
    expect(newCharacter.inventory).toEqual({weapon: {itemName: 'space gun', trait: '2 strength'},
      coin: 10});
  });

  //addItem(item)
  test('16. It will add "rock" to newCharacter inventory', () => {
    let newCharacter = new Character('alien');
    newCharacter.addItem({rock: "This item has no value"});
    expect(Object.hasOwn(newCharacter.inventory, 'rock')).toBeTruthy();
  });
});