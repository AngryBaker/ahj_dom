import GameField from "./game-field/GameField";

// TODO: write code here
document.addEventListener("DOMContentLoaded", () => {
  const gameField = new GameField(document.querySelector(".game-field"));
  gameField.createGoblin();
  const jumpInterval = setInterval(() => {
    let newCell = gameField.changePosition();
    while (newCell === gameField.cellForGoblin) {
      newCell = gameField.changePosition();
      console.log("ghbdtn")
    }
    newCell.appendChild(gameField.goblin);
  }, 1000);
});
