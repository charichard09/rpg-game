import Character from "./character-creation.js";

export default function generateEnemy() {
  let randomChar = new Character();
  const typeArray = ['scientist', 'alien', 'soldier'];
  randomChar.type = typeArray[Math.floor(Math.random() * 3)];
  return randomChar;
}
