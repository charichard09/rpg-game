import generateEnemy from "./generate-enemy.js";

export default function battle(character) {
  const randomEnemy = generateEnemy();
  let winCount = 0;
  let result = '';

  (randomEnemy.strength <= character.strength ? winCount += 1 : winCount += 0); 
  (randomEnemy.intelligence <= character.intelligence ? winCount += 1 : winCount += 0); 
  (randomEnemy.agility <= character.agility ? winCount += 1 : winCount += 0);    
  
  (winCount >= 2 ? result = "Battle Won!" : result = "Battle Lost!");


//   something like this
//   if (result === "Battle Won!") {
//     character.addItem(randomEnemy.inventory.get((Math.floor(Math.random() * 5) + 1)));
//   } else {
//     return result;
//   }
  return result;
}