import generateEnemy from '../src/js/generate-enemy.js';
import Character from '../src/js/character-creation.js';

describe('generateEnemy', () => {

  test('1. It will generate a random character', () => {
    let randomChar = generateEnemy();    
    expect(/(Cthulu|Predator|Space Marine)/.test(randomChar.type)).toBeTruthy();
  });

  test('2. It will distribute randomly 10 points across 3 stats', () => { 
    let randomChar = generateEnemy();

    console.log(randomChar.strength)
    console.log(randomChar.intelligence)
    console.log(randomChar.agility)
    expect(randomChar.agility + randomChar.strength + randomChar.intelligence).toEqual(10);

    // expect(randomChar.agility).toBeGreaterThanOrEqual(0);
    // expect(randomChar.agility).toBeLessThanOrEqual(10);
    // expect(randomChar.strength).toBeGreaterThanOrEqual(0);
    // expect(randomChar.strength).toBeLessThanOrEqual(10);
    // expect(randomChar.intelligence).toBeGreaterThanOrEqual(0);
    // expect(randomChar.intelligence).toBeLessThanOrEqual(10);
  });

  // test('2. It will generate a random intelligence stat for character', () => {
  //   let randomChar = generateEnemy();    
  //   expect(randomChar.intelligence).toBeGreaterThanOrEqual(1);
  //   expect(randomChar.intelligence).toBeLessThan(5);
  // });

  // test('3. It will generate a random strength stat for character', () => {
  //   let randomChar = generateEnemy();    
  //   expect(randomChar.strength).toBeGreaterThanOrEqual(1);
  //   expect(randomChar.strength).toBeLessThan(5);
  // });

  // test('4. It will generate a random agility stat for character', () => {
  //   let randomChar = generateEnemy();    
  //   expect(randomChar.agility).toBeGreaterThanOrEqual(1);
  //   expect(randomChar.agility).toBeLessThan(5);
  // });
});


