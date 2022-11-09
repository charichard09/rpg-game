// Character creation: 
// Use class to generate different character types. 
//   character types — scientist, alien, soldier
//   characters should have specific properties - strength, intelligence, agility
import Character from './../src/js/character-creation.js';

describe('Character', () => {

  test('It should create a new character with type of scientist', () => {
    const newCharacter = new Character('scientist');
    expect(newCharacter.type).toEqual('scientist');
  });

  // test('It should create a new character with type of alien', () => {
  //   const newCharacter = new Character('alien');
  //   expect(newCharacter.type).toEqual('alien');
  // });
});





// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });

// });