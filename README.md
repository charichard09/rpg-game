# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_
* _Jest_
* _Babel_
* _Node.js_ 
* _webpack_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

* _Go to link:_
* [name](https://charichard09.github.io/name)
* _{Give input to get output} i.e. Select your toppings and hit Add Pizza to get a total_

* _Alternatively:_
* _Clone repo to a local directory_
download node?
* _Installing all packages with $ npm install._
* _Building the project using webpack with $ npm run build_
* _Starting a development server with $ npm run start_
* _Linting JS files in the src folder with $ npm run lint_
* _Running tests with Jest using $ npm run test_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_If you have any issues or have questions, ideas or concerns please contact me at [charichard09@gmail.com](mailto:charichard09@gmail.com)_

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _date_ _author name(s)_





Prompt: Build a Sci-Fi Role Playing Game.

Character creation: 
Use class to generate different character types. 
  character types — scientist, alien, soldier
  characters should have specific properties - strength, intelligence, agility

  if alien chosen, pass alienDefaultInv to character object creation

//inv idea
const alienDefaultInv = {
  level: "1",
  weapon: {name: "space gun", attribute: +2 strength}
  armor: "space suit",
  coin: "10"
  }




Characters should be able to add, drop, buy and sell items:

class Character {
  ...code above

  dropItem(item) {
    delete this.inventory[item];
  }
  addItem(item) {

    //if Object.keys(this.inventory).length > 10, print some error 
  }
}


Battle system: 
Determine conditions for winning a battle, defeat monsters
//if 2 out of 3 strength, int, agility are bigger than monsters, we win

// some kind players
fight enemy option uses class to create an enemy with random properties and use determine winner function 

// exp system
if the fight is won, increase character level by 1. Multiply a random 1/3 stats by 2.

// loot system
if the fight is won, offer to add or drop a random item from a loot table {lets say 10 items in here}


