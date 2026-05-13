const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const closePopup = document.getElementById("closePopup");

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleClick(cell, index)); /**Explain this line */ /** nu i click mo dejay specific cell ket i run na nukwa dejay handelClick function and ikkan na ti cell and index*/
});

function handleClick(cell, index) {
    if (cell.textContent !== "" || !gameActive) return;

    cell.textContent = currentPlayer;

    if (checkWinner()) {
        popupMessage.textContent = "Player " + currentPlayer + " Wins Yehey!!🤩";
        popup.classList.remove("hidden");
        gameActive = false;
        return;
    }

     if ([...cells].every(cell => cell.textContent !== "")) { /**Explain this line */ /**i check na amin nga cell nu adda nagyan na and this also turns all cell into an array[...cells] */
        popupMessage.textContent = "It's a Draw! aww☹️";
        popup.classList.remove("hidden");
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X"; /**na explain naaa */ /**if else siya na shortcut lang nalaklaka ken na simsimple */
    statusText.textContent = "Player " + currentPlayer + "'s Turn";
}

function checkWinner() {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "Player X's Turn";
}

closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
    resetGame();
});