import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './js/character-creation.js';

//UI Logic
let newChar = new Character('soldier');

document.querySelector('h3').append(Object.keys(newChar));