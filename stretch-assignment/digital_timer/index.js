let countOnes = 0;
let countTens = 0;
let mins = 0;
let countTenM = 0;
let countHundredM = 0;
let startButton = document.createElement("button");
startButton.textContent = "Start";
let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
function minutes() {
    setInterval(() => {
        countOnes++;
        if (countOnes === 10) {
            countOnes = 0;
            countTens++;
        }
        if (countTens === 6) {
            mins++;
            countTens = 0;
        }
        document.querySelector("#minutes").textContent = mins;
        document.querySelector("#secondOnes").textContent = countOnes;
        document.querySelector("#secondTens").textContent = countTens;
    }, 1000);
}
function seconds() {
    setInterval(() => {
        countTenM++;
        if (countTenM === 10) {
            countTenM = 0;
            countHundredM++;
        }
        if (countHundredM === 10) {
            countHundredM = 0;
        }
        document.querySelector("#msHundreds").textContent = countHundredM;
        document.querySelector("#msTens").textContent = countTenM;
    }, 10);
}

startButton.onclick = function() {
    minutes();
    seconds();
    startButton.disabled = true;
}
resetButton.onclick = function() {
    startButton.disabled = false;
    countOnes = 0;
    countTens = 0;
    mins = 0;
    countTenM = 0;
    countHundredM = 0;
}
document.querySelector("body").append(startButton);
document.querySelector("body").append(resetButton);