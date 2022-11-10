import generateEnemy from "./generate-enemy.js";

export default function battle(character) {
  const randomEnemy = generateEnemy();
  let points = 0;

  if (randomEnemy.strength <= character.strength) {
    points += 1;
  }
  return points;
}