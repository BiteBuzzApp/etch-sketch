const grid = document.querySelector(".container")


//prompt to get grid size
function gridSize(){
    let input = prompt("How many squares per side? (1 - 100)");

    if (input === null) return;

    let answer = Number(input);

    if (answer > 0 && answer < 101) {
        createGrid(answer)
    }
    
    else {
        gridSize()
    }
}

//button to resize
const size = document.createElement("button");
size.addEventListener("click", gridSize);
size.textContent = "Resize";
size.style.margin = "auto";
size.style.display = "block"
document.body.appendChild(size);

//button to clear
const clear = document.createElement("button");
clear.addEventListener("click", () => {
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square) => {
        square.style.backgroundColor = "transparent"
    })
});
clear.textContent = "Clear";
clear.style.margin = "auto";
clear.style.display = "block"
document.body.appendChild(clear);

function createGrid(squaresPerSide){
    const squarePercent = 100 / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;
    grid.textContent = ""

    for (i = 0; i < totalSquares; i++){
        const square = document.createElement("div");
        square.style.width = `${squarePercent}%` ;
        square.style.height = `${squarePercent}%` ;
        square.classList = "square";
        square.style.border = "1px solid black"
        square.style.boxSizing = "border-box"

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black"
        })

        grid.appendChild(square)
    }
}
