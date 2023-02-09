const buttonDisappear = document.getElementById("button-disappear");
const textDisappear = document.getElementsByClassName("disappear")[0];

const formulaRemember = textDisappear.textContent;
const arrOfTwoChoices = [formulaRemember, "..."];
let counter = 1;


buttonDisappear.addEventListener("click", function () {
    textDisappear.textContent = arrOfTwoChoices[counter]
    counter =  (counter + 1) % 2
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "render"]);
})

buttonDisappear.click()