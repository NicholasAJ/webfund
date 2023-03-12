var addLikeButton = document.querySelector("#likeButton");
var addLikeButton2 = document.querySelector("likeButton2")
var addLikeButton3 = document.querySelector("likeButton3")
var count = document.querySelector("#likeCounter");
var count2 = document.querySelector("#likeCounter2");
var count3 = document.querySelector("#likeCounter3");
var startLike = 0;
var startLike2 = 0;
var startLike3 = 0;

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