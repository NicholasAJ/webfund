var donateButton = document.querySelector("#donate");
var likeButton = document.querySelector("#petButtonP");
var likeButton2 = document.querySelector("petButtonB")
var likeButton3 = document.querySelector("petButtonO")
var count = document.querySelector("#pepCounter");
var count2 = document.querySelector("#bruCounter");
var count3 = document.querySelector("#oscCounter");
var startLike = 0;
var startLike2 = 0;
var startLike3 = 0;

function removeButton(element) {
  donateButton.remove();
}

function chosenPet(dropdown) {
  if (dropdown.value=="cat") {
    alert("I'm looking for a cat");
  }
  if (dropdown.value =="dog") {
    alert("I'm looking for a dog")
  }
}

function addLike(element) {
  startLike++;
  console.log(startLike);
  count.innerText = startLike + " Like(s)";
}

function addLike2(element) {
  startLike2++;
  console.log(startLike2);
  count2.innerText = startLike2 + " Like(s)";
}

function addLike3(element) {
  startLike3++;
  console.log(startLike3);
  count3.innerText = startLike3 + " Like(s)";
}