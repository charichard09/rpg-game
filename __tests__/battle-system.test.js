import battle from "../src/js/battle-system.js";
import Character from "../src/js/character-creation.js";


describe ('battle', () => {

  test ('1. It will return "Battle Won!" if 2 character stats are greater than random enemy', () => {
    let newCharacter = new Character('soldier');
    newCharacter.defaultSetup();
    newCharacter.intelligence += 5;
    newCharacter.agility += 5;
    expect(battle(newCharacter)).toEqual("Battle Won!");
  });

  test ('2. It will return "Battle Lost!" if 2 character stats are less than random enemy', () => {
    let newCharacter = new Character('soldier');
    newCharacter.defaultSetup();
    newCharacter.intelligence -= 5;
    newCharacter.agility -= 5;
    expect(battle(newCharacter)).toEqual("Battle Lost!");
  });

})

