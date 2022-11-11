import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './js/character-creation.js';
import battle from './js/battle-system.js';
import generateEnemy from './js/generate-enemy.js';

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const characterInput = document.querySelector("input[name='class-select']:checked").value;

  let newChar = new Character(characterInput);
  let newEnemy = generateEnemy();
  newChar.defaultSetup();
  newChar.addTrait();

  document.getElementById("select-class-form").remove();

  printCharInfo(newChar);
  printEnemyInfo(newEnemy);
  
  let resultsUl = document.getElementById("results-ul");
  document.getElementById("battle-button").addEventListener("click", () => {
    newEnemy = generateEnemy();
    let resultLi = document.createElement("li");

    document.getElementById("enemy-info-ul").remove();
    printEnemyInfo(newEnemy);
    resultLi.append(battle(newChar, newEnemy));
    resultsUl.append(resultLi);

    document.getElementById("char-info-ul").remove();
    printCharInfo(newChar);
    
    newChar.addTrait();
  });
}

//highlightChar
function highlightChar() {
  document.getElementById("soldier-img").addEventListener("click", function(event) {
    event.target.setAttribute("style", "filter: drop-shadow(2px 0px 0 red) drop-shadow(0px 2px 0 red) drop-shadow(-2px -0px 0 red) drop-shadow(-0px -2px 0 red);");
    document.getElementById("alien-img").removeAttribute("style");
    document.getElementById("scientist-img").removeAttribute("style");
  });
  document.getElementById("alien-img").addEventListener("click", function(event) {
    document.getElementById("soldier-img").removeAttribute("style");
    event.target.setAttribute("style", "filter: drop-shadow(2px 0px 0 red) drop-shadow(0px 2px 0 red) drop-shadow(-2px -0px 0 red) drop-shadow(-0px -2px 0 red);");
    document.getElementById("scientist-img").removeAttribute("style");
  });
  document.getElementById("scientist-img").addEventListener("click", function(event) {
    document.getElementById("soldier-img").removeAttribute("style");
    document.getElementById("alien-img").removeAttribute("style");
    event.target.setAttribute("style", "filter: drop-shadow(2px 0px 0 red) drop-shadow(0px 2px 0 red) drop-shadow(-2px -0px 0 red) drop-shadow(-0px -2px 0 red);");
  });
}

//print character
function printCharInfo(character) {
  let charInfoUl = document.createElement("ul");
  charInfoUl.setAttribute("id", "char-info-ul");

  if (character.type === "soldier") {
    document.getElementById("soldier-hidden").setAttribute("class", "img-fluid");
  } else if (character.type === "alien") {
    document.getElementById("alien-hidden").setAttribute("class", "img-fluid");
  } else {
    document.getElementById("scientist-hidden").setAttribute("class", "img-fluid");
  }

  for (const entry of Object.entries(character)) {
    let charInfoLi = document.createElement("li");

    if (entry[0] === "inventory") {
      let invArray = Object.entries(character[entry[0]]);
      charInfoLi.append(`${entry[0]}: ${invArray}`);
    } else {
      charInfoLi.append(`${entry[0]}: ${entry[1]}`);
    }
    charInfoUl.append(charInfoLi);
  }
  document.getElementById("char-info-div").append(charInfoUl);
}

//print enemy
function printEnemyInfo(character) {
  let charInfoUl = document.createElement("ul");
  charInfoUl.setAttribute("id", "enemy-info-ul");

  if (character.type === "Cthulu") {
    document.getElementById("cthulu-hidden").setAttribute("class", "img-fluid");
    document.getElementById("predator-hidden").setAttribute("class", "img-fluid hidden");
    document.getElementById("space-marine-hidden").setAttribute("class", "img-fluid hidden");
  } else if (character.type === "Predator") {
    document.getElementById("predator-hidden").setAttribute("class", "img-fluid");
    document.getElementById("cthulu-hidden").setAttribute("class", "img-fluid hidden");
    document.getElementById("space-marine-hidden").setAttribute("class", "img-fluid hidden");
  } else {
    document.getElementById("space-marine-hidden").setAttribute("class", "img-fluid");
    document.getElementById("predator-hidden").setAttribute("class", "img-fluid hidden");
    document.getElementById("cthulu-hidden").setAttribute("class", "img-fluid hidden");
  }

  for (const entry of Object.entries(character)) {
    let charInfoLi = document.createElement("li");

    if (entry[0] === "inventory") {
      let invArray = Object.entries(character[entry[0]]);
      charInfoLi.append(`${entry[0]}: ${invArray}`);
    } else {
      charInfoLi.append(`${entry[0]}: ${entry[1]}`);
    }
    charInfoUl.append(charInfoLi);
  }
  document.getElementById("enemy-info-div").append(charInfoUl);
}

// battle
// function handleBattle(event) {
//   battle
//   event.preventDefault();
//   let enemy = generateEnemy();
//   const characterInput = document.querySelector("input[name='class-select']:checked").value;

//   let newChar = new Character(characterInput);
//   newChar.defaultSetup();
//   newChar.addTrait();

//   document.getElementById("select-class-form").remove();

//   printCharInfo(newChar);
  
// }


highlightChar();
document.getElementById("select-class-form").addEventListener("submit", handleFormSubmission);






