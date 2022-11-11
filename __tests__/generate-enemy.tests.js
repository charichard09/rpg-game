import generateEnemy from '../src/js/generate-enemy.js';
import Character from '../src/js/character-creation.js';

describe('generateEnemy', () => {

  test('1. It will generate a random character', () => {
    let randomChar = generateEnemy();    
    expect(/(Cthulu|Predator|Space Marine)/.test(randomChar.type)).toBeTruthy();
  });

  test('2. It will distribute randomly 10 points across 3 stats', () => { 
    let randomChar = generateEnemy();
    expect(randomChar.agility + randomChar.strength + randomChar.intelligence).toEqual(10);
  });

  test('3. It will add a lootTable to the enemy', () => { 
    let randomChar = generateEnemy();
    const [item1, item2, item3, item4, item5] = randomChar.inventory;
    expect(item1[1]).toEqual(randomChar.inventory.get("rock"));
    expect(item2[1]).toEqual(randomChar.inventory.get("bottle"));
    expect(item3[1]).toEqual(randomChar.inventory.get("weapon"));
    expect(item4[1]).toEqual(randomChar.inventory.get("armor"));
    expect(item5[1]).toEqual(randomChar.inventory.get("armor"));

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