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

  const lootTable = new Map(
    [
      [0, {"rock": "This has no value"}],
      [1, {"bottle": "This has no value"}],
      [2, {"weapon": {itemName: "light saber", trait: "4 strength"}}],
      [3, {"armor": {itemName: "hover boots", trait: "4 agility"}}],
      [4, {"armor": {itemName: "glasses", trait: "4 intelligence"}}]
    ]
  );
  randomChar.inventory = lootTable;

  return randomChar;
}
