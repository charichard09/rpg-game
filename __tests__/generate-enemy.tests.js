import generateEnemy from '../src/js/generate-enemy.js';
import Character from '../src/js/character-creation.js';

describe('generateEnemy', () => {

  test('1. It will generate a random character', () => {
    let randomChar = generateEnemy();    
    expect(/(Cthulu|Predator|Space Marine)/.test(randomChar.type)).toBeTruthy();
  });

  test('2. It will generate a random intelligence stat for character', () => {
    let randomChar = generateEnemy();    
    expect(randomChar.intelligence).toBeGreaterThanOrEqual(1);
    expect(randomChar.intelligence).toBeLessThan(6);
  });

  test('3. It will generate a random strength stat for character', () => {
    let randomChar = generateEnemy();    
    expect(randomChar.strength).toBeGreaterThanOrEqual(1);
    expect(randomChar.strength).toBeLessThan(6);
  });

  test('4. It will generate a random agility stat for character', () => {
    let randomChar = generateEnemy();    
    expect(randomChar.agility).toBeGreaterThanOrEqual(1);
    expect(randomChar.agility).toBeLessThan(6);
  });
});



