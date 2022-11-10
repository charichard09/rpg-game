import generateEnemy from '../src/js/generate-enemy.js';
import Character from '../src/js/character-creation.js';

describe('generateEnemy', () => {

  test('1. It will generate a "scientist" Character', () => {
    expect(generateEnemy()).toBeTruthy();
  });
});