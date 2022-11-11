import generateEnemy from '../src/js/generate-enemy.js';

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
    const [[, item1], [, item2], [, item3], [, item4], [, item5]] = randomChar.inventory;
    expect(item1).toEqual(randomChar.inventory.get(0));
    expect(item2).toEqual(randomChar.inventory.get(1));
    expect(item3).toEqual(randomChar.inventory.get(2));
    expect(item4).toEqual(randomChar.inventory.get(3));
    expect(item5).toEqual(randomChar.inventory.get(4));
  });
});