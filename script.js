let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newG = document.querySelector("#new");
let msgCon = document.querySelector(".msg");

let turnX = true;

const winPattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const showWinner = (winner) => {
  msgCon.innerText = `Congratulations, ${winner} is the Winner!`;
  msgCon.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        disableBoxes();
      }
    }
  }
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turnX = true;
};

// Reset button -> clears board but keeps message
reset.addEventListener("click", () => {
  enableBoxes();
});

// New Game button -> clears board + hides message
newG.addEventListener("click", () => {
    console.log("NEW GAME clicked");
    boxes.forEach((box) => {
        box.disabled = false;
    });
    msgCon.classList.add("hide");
    turnX = true;
});

