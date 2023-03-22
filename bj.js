let instructions = ["When you click the start game button, the dealer(Computer) deals two cards to you and sums their face values.",
 "You are asked to draw a new card by clicking the new card button. The dealer deals the new card drawn and adds its face value to the sum of the previous cards.",
  "The game continues as you draw a new card if the sum is less than 21.",
  "If the cards drawn sum up to 21, you win the game.",
"If the sum of the cards drawn exceeds 21, you cannot draw a new card. You are out of the game."
];

let instructionDisplay = document.getElementById("instructionDisplay");
let currentIndex = 0;

let previousButton = document.getElementById("btnP");
let nextButton = document.getElementById("btnN");

previousButton.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateItem();
    }
});

nextButton.addEventListener("click", function() {
    if (currentIndex < instructions.length - 1) {
        currentIndex++;
        updateItem();
    }
});

function updateItem() {
    let currentItem = instructions[currentIndex];
    instructionDisplay.innerText = currentItem;
}

updateItem();

