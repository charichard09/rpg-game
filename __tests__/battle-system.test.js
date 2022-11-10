import battle from "../src/js/battle-system.js";
import Character from "../src/js/character-creation.js";


describe ('battle', () => {

  test ('1. It will return true if character strength is greater than random character', () => {
    let newCharacter = new Character('soldier');
    expect(battle(newCharacter)).toBeTruthy();
  });

})