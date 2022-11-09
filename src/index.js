import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Triangle from './js/triangle.js';

//UI Logic
function handleTriangleForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const length1 = parseInt(document.querySelector('#length1').value);
  const length2 = parseInt(document.querySelector('#length2').value);
  const length3 = parseInt(document.querySelector('#length3').value);
  const triangle = new Triangle(length1, length2, length3);
  const response = triangle.checkType();
  const pTag = document.createElement("p");
  pTag.append(`Your result is: ${response}.`);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
});
