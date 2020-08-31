//e is the event object that is created whenever a listener captures one
function pow(event) {
  let element = event.currentTarget;
  element.style.backgroundColor = "green";
  alert(element.id);
}

// bubbling will move from target to root
// useCapture goes from root to target

// window.onload = function () {
//   this.document.getElementById("A").addEventListener("click", pow, true);
//   this.document.getElementById("B").addEventListener("click", pow, true);
//   this.document.getElementById("C").addEventListener("click", pow, true);
//   this.document.getElementById("D").addEventListener("click", pow, true);
// };

// var pink = "color";
document
  .getElementById("A")
  .addEventListener(
    "click",
    (e) => (e.target.style.backgroundColor = "green"),
    false
  );
document
  .getElementById("B")
  .addEventListener(
    "click",
    (e) => (e.target.style.backgroundColor = "green"),
    false
  );
document
  .getElementById("C")
  .addEventListener(
    "click",
    (e) => (e.target.style.backgroundColor = "green"),
    false
  );
document
  .getElementById("D")
  .addEventListener(
    "click",
    (e) => (e.target.style.backgroundColor = "green"),
    false
  );

//False is bubbling: Target to root and root to target, the event
//True is capturing: from root to target.

// document.querySelector(".box-1").addEventListener(
//   "click",
//   (e) => {
//     setTimeout(() => {
//       document.querySelector(".box-1 > p").style.backgroundColor = "red";
//     }, 1000);
//   },
//   true
// );

// document.querySelector(".box-2").addEventListener(
//   "click",
//   (e) => {
//     setTimeout(() => {
//       document.querySelector(".box-2 > p").style.backgroundColor = "yellow";
//     }, 1000);
//   },
//   true
// );

// document.querySelector(".box-3").addEventListener(
//   "click",
//   (e) => {
//     setTimeout(() => {
//       document.querySelector(".box-3 > p").style.backgroundColor = "green";
//     }, 1000);
//   },
//   true
// );
