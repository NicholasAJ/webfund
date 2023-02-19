var count = 0;
var countElement = document.querySelector("#count");

console.log(count)
function add1() {
    count++;
    countElement.innerText = "The count is " + count;
    console.log(count);
}

console.log(count)
function subtract1() {
    count--;
    countElement.innerText = "The count is " + count;
    console.log(count);
}