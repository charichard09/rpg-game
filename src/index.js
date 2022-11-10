import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './js/character-creation.js';

//UI Logic
let newChar = new Character('soldier');
newChar.defaultInventory();
newChar.addTrait();

let charInfoUl = document.createElement("ul");
for (const entry of Object.entries(newChar)) {
  let charInfoLi = document.createElement("li");

  if (entry[0] === "inventory") {
    charInfoLi.append(Object.entries(newChar[entry[0]]));
  } else {
    charInfoLi.append(`${entry[0]}: ${entry[1]}`);
  }
  charInfoUl.append(charInfoLi);
}
document.getElementById("char-info-div").append("Character:", charInfoUl);
