import Character from "./character-creation.js";

export default function generateEnemy() {
  let randomChar = new Character();
  const typeArray = ['Cthulu', 'Predator', 'Space Marine'];
  randomChar.type = typeArray[Math.floor(Math.random() * 3)];
  // this.randomChar.intelligence = Math.floor(Math.random() * 5) + 1;
  return randomChar;
}
