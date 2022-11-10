import generateEnemy from "./generate-enemy.js";

export default function battle(character) {
  const randomEnemy = generateEnemy();
  let winCount = 0;
  let result = '';

  (randomEnemy.strength <= character.strength ? winCount += 1 : winCount += 0); 
  (randomEnemy.intelligence <= character.intelligence ? winCount += 1 : winCount += 0); 
  (randomEnemy.agility <= character.agility ? winCount += 1 : winCount += 0);    
  
  (winCount >= 2 ? result = "Battle Won!" : result = "Battle Lost!");

  return result;
}