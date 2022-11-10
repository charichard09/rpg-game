import Character from "./character-creation.js";

export default function generateEnemy() {
  let randomChar = new Character();
  const typeArray = ['Cthulu', 'Predator', 'Space Marine'];
  randomChar.type = typeArray[Math.floor(Math.random() * 3)];

  let pointTotal = 10;
  let randomPoints1 = Math.floor(Math.random() * pointTotal) + 1;
  let randomPoints2 = Math.floor(Math.random() * (pointTotal - randomPoints1)) + 1;
  let randomPoints3 = pointTotal - (randomPoints2 + randomPoints1);

  let randomArray = [randomPoints1, randomPoints2, randomPoints3];
  

  randomChar.agility = randomArray[Math.floor(Math.random() * 3)];
  randomArray.splice(randomArray.indexOf(randomChar.agility), 1);
  randomChar.strength = randomArray[Math.floor(Math.random() * 2)];
  randomArray.splice(randomArray.indexOf(randomChar.strength), 1);
  randomChar.intelligence = randomArray[0];
  
  // randomChar.intelligence = Math.floor(Math.random() * 4) + 1;
  // randomChar.strength = Math.floor(Math.random() * 4) + 1;
  // randomChar.agility = Math.floor(Math.random() * 4) + 1;
  return randomChar;
}
