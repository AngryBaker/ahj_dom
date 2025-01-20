/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/game-field/GameField.js
class GameField {
  constructor(element) {
    this._element = element;
  }
  goblin = null;
  cellForGoblin = null;
  changePosition() {
    const allCells = this._element.querySelectorAll(".game-cell");
    const newCellForGoblin = allCells[Math.floor(Math.random() * allCells.length)];
    // newCellForGoblin.appendChild(this.goblin);
    return newCellForGoblin;
  }
  createGoblin() {
    const goblin = document.createElement("div");
    goblin.className = "goblin";
    this.goblin = goblin;
    const allCells = this._element.querySelectorAll(".game-cell");
    const cellForGoblin = allCells[Math.floor(Math.random() * allCells.length)];
    this.cellForGoblin = cellForGoblin;
    cellForGoblin.appendChild(goblin);
  }
}
;// ./src/js/app.js


// TODO: write code here
document.addEventListener("DOMContentLoaded", () => {
  const gameField = new GameField(document.querySelector(".game-field"));
  gameField.createGoblin();
  const jumpInterval = setInterval(() => {
    let newCell = gameField.changePosition();
    while (newCell === gameField.cellForGoblin) {
      newCell = gameField.changePosition();
      console.log("ghbdtn");
    }
    newCell.appendChild(gameField.goblin);
  }, 1000);
});
;// ./src/index.js





// TODO: write your code in app.js
/******/ })()
;