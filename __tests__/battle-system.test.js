import battle from "../src/js/battle-system.js";
import Character from "../src/js/character-creation.js";


describe ('battle', () => {

  test ('1. It will return "Battle Won!" if strength and int are greater than random enemy', () => {
    let newCharacter = new Character('soldier');
    newCharacter.strength = 10;
    newCharacter.intelligence = 10;
    newCharacter.agility = -1;
    expect(battle(newCharacter)).toEqual("Battle Won!");
  });

  test ('2. It will return "Battle Lost!" if strength and intelligence are less than random enemy', () => {
    let newCharacter = new Character('soldier');
    newCharacter.strength = -1;
    newCharacter.intelligence = -1;
    newCharacter.agility = 10;
    expect(battle(newCharacter)).toEqual("Battle Lost!");
  });

  test ('3. It will return "Battle Won!" if strength and agil character stats are less than random enemy', () => {
    let newCharacter = new Character('soldier');
    newCharacter.strength = -1;
    newCharacter.intelligence = 10;
    newCharacter.agility = 10;
    expect(battle(newCharacter)).toEqual("Battle Won!");
  });

  test ('4. It will return "Battle Lost!" if agility and intelligence are less than random enemy', () => {
    let newCharacter = new Character('soldier');
    newCharacter.strength = 10;
    newCharacter.intelligence = -1;
    newCharacter.agility = -1;
    expect(battle(newCharacter)).toEqual("Battle Lost!");
  });

  test ('4. It will add an item from lootTable on "Battle Won!"', () => {
    let newCharacter = new Character('soldier');
    newCharacter.strength = 10;
    newCharacter.intelligence = 10;
    newCharacter.agility = 0;
    battle(newCharacter);
    const lootTable = new Map(
      [
        [0, {"rock": "This has no value"}],
        [1, {"bottle": "This has no value"}],
        [2, {"weapon": {itemName: "light saber", trait: "4 strength"}}],
        [3, {"armor": {itemName: "hover boots", trait: "4 agility"}}],
        [4, {"armor": {itemName: "glasses", trait: "4 intelligence"}}]
      ]
    );
    // const ArrayItems = [lootTable.get(0), lootTable.get(1), lootTable.get(2), lootTable.get(3), lootTable.get(4)];
    // expect(ArrayItems.includes(newCharacter.inventory)).toEqual(true);
    expect(Object.is(newCharacter.inventory, lootTable.get(0)) || Object.is(newCharacter.inventory, lootTable.get(1)) || 
    Object.is(newCharacter.inventory, lootTable.get(2)) || Object.is(newCharacter.inventory, lootTable.get(3)) ||
    Object.is(newCharacter.inventory, lootTable.get(4))).toBeTruthy();
  });
});

