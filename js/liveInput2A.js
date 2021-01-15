var checkLimitA = document.getElementById("checkLimitTooltipA");
var checkLimitB = document.getElementById("checkLimitTooltipB");
var checkLimitC = document.getElementById("checkLimitTooltipC");
var eqncontain = document.getElementById("eqnOutput");
var eqnContainA = document.getElementById("eqnOutputA-container");
var eqnContainB = document.getElementById("eqnOutputB-container");
var eqnContainC = document.getElementById("eqnOutputC-container");
var btn = document.getElementById("button");
// AAAAAAAAAAAAAAAAAAAA STARTS
function preSolveEqnA() {
  var btn = document.getElementById("steps");
  if (btn.style.display === "inline-block") {
    btn.style.display = "none";
    document.getElementById("solvingSteps").style.display = "none";
    btn.innerHTML = "Show Working Steps";
    btn.style.backgroundColor = "white";
    btn.style.color = "rgba(0, 255, 213, 0.808)";
    btn.style.boxShadow = "2px 2px 5px rgba(59, 57, 57, 0)";
    btn.style.padding = "0 1%";
    btn.style.fontSize = "2em";
    document.getElementById("fulleqntt").style.display = "none";
  }
  let a = input1.style;
  a.width = "55px";
  var num = input1.value;
  eqnOutputA.innerHTML = input1.value;
  checkLimitB.style.width = "0%";
  checkLimitC.style.width = "0%";
  if ((num.length === 0) || (input1.value == 0)) {
    a.width = "35px";
    eqnContainA.style.display = "none";
  } else {
    eqnContainA.style.display = "inline";
  }
  if ((input1.value == 1)) {
    eqnOutputA.innerHTML = "";
  }
  if (input1.value == -1) {
    eqnOutputA.innerHTML = "-";
  }
  if (input1.value == 0) {
    eqncontain.style.display = "none";
  } else {
    eqncontain.style.display = "block";
  }
  if ((input1.value > 99) || (input1.value < -99)) {
    checkLimitA.innerHTML = "The value of 'a' must not be more than 99 or less than -99";
    checkLimitA.style.width = "512%";
    checkLimitA.style.left = "-140%";
    checkLimitA.style.transition = "0.7s";
    checkLimitB.style.width = "0%";
    checkLimitC.style.width = "0%";
    btn.style.margin = "2.5%";
    input1.value = "";
    a.width = "35px";
    eqnOutputA.innerHTML = input1.value;
    eqncontain.style.display = "none";
    eqnContainA.style.display = "none";
  } else {
    checkLimitA.style.width = "0%";
    checkLimitA.style.left = "102%";
    btn.style.margin = "0.5%";
  }
}
// BBBBBBBBBBBBBBBBBBBB STARTS
function preSolveEqnB() {
  var btn = document.getElementById("steps");
  if (btn.style.display === "inline-block") {
    btn.style.display = "none";
    document.getElementById("solvingSteps").style.display = "none";
    btn.innerHTML = "Show Working Steps";
    btn.style.backgroundColor = "white";
    btn.style.color = "rgba(0, 255, 213, 0.808)";
    btn.style.boxShadow = "2px 2px 5px rgba(59, 57, 57, 0)";
    btn.style.padding = "0 1%";
    btn.style.fontSize = "2em";
    document.getElementById("fulleqntt").style.display = "none";
  }
  input2.style.width = "55px";
  let num = input2.value;
  eqnOutputB.innerHTML = "+" + input2.value;
  checkLimitA.style.width = "0%";
  checkLimitC.style.width = "0%";
  if ((num.length === 0) || (input2.value == 0)) {
    input2.style.width = "35px";
    eqnContainB.style.display = "none";
  } else {
    eqnContainA.style.display = "inline";
    eqnContainB.style.display = "inline";
  }
  if (input2.value == 1) {
    eqnOutputB.innerHTML = "+";
  }
  if (input2.value < 0) {
    eqnOutputB.innerHTML = input2.value;
  }
  if (input2.value == -1) {
    eqnOutputB.innerHTML = "-";
  }
  if ((input2.length === 0) && (input3.length === 0)) {
    eqnContainA.style.display = "none";
  }
  if (input1.value == 0) {
    eqncontain.style.display = "none";
  } else {
    eqncontain.style.display = "block";
  }
  if ((input2.value > 99) || (input2.value < -99)) {
    checkLimitB.innerHTML = "The value of 'b' must not be more than 99 or less than -99";
    checkLimitB.style.width = "612%";
    checkLimitB.style.left = "-290%";
    checkLimitB.style.transition = "0.7s";
    checkLimitA.style.width = "0%";
    checkLimitC.style.width = "0%";
    btn.style.margin = "2.5%";
    document.getElementById("input2").value = "";
    input2.style.width = "35px";
    eqnOutputB.innerHTML = "+" + input2.value;
    eqncontain.style.display = "none";
    eqnContainB.style.display = "none";
  } else {
    checkLimitB.style.width = "0%";
    checkLimitB.style.left = "-2%";
    btn.style.margin = "0.5%";
  }
  if ((input2.value == 0) && (input3.value == 0)) {
    eqnContainA.style.display = "none";
  }
}
// CCCCCCCCCCCCCCCCCCCC STARTS
function preSolveEqnC() {
  var btn = document.getElementById("steps");
  if (btn.style.display === "inline-block") {
    btn.style.display = "none";
    document.getElementById("solvingSteps").style.display = "none";
    btn.innerHTML = "Show Working Steps";
    btn.style.backgroundColor = "white";
    btn.style.color = "rgba(0, 255, 213, 0.808)";
    btn.style.boxShadow = "2px 2px 5px rgba(59, 57, 57, 0)";
    btn.style.padding = "0 1%";
    btn.style.fontSize = "2em";
    document.getElementById("fulleqntt").style.display = "none";
  }
  input3.style.width = "55px";
  let num = input3.value;
  eqnOutputC.innerHTML = "+" + input3.value;
  checkLimitA.style.width = "0%";
  checkLimitB.style.width = "0%";
  if ((num.length === 0) || (input3.value == 0)) {
    input3.style.width = "35px";
    eqnContainC.style.display = "none";
  } else {
    eqnContainA.style.display = "inline";
    eqnContainC.style.display = "inline";
  }
  if (input3.value < 0) {
    eqnOutputC.innerHTML = input3.value;
  }
  if ((input2.length === 0) && (input3.length === 0)) {
    eqnContainA.style.display = "none";
  }
  if (input1.value == 0) {
    eqncontain.style.display = "none";
  } else {
    eqncontain.style.display = "block";
  }
  if (input3.value < 0) {
    eqnOutputC.innerHTML = input3.value;
  }
  if ((input3.value > 999) || (input3.value < -999)) {
    checkLimitC.innerHTML = "The value of 'c' must not be more than 999 or less than -999";
    checkLimitC.style.width = "1372%";
    checkLimitC.style.left = "-840%";
    checkLimitC.style.transition = "0.7s";
    checkLimitA.style.width = "0%";
    checkLimitB.style.width = "0%";
    btn.style.margin = "2.5%";
    document.getElementById("input3").value = "";
    input3.style.width = "35px";
    eqnOutputC.innerHTML = "+" + input3.value;
    eqncontain.style.display = "none";
    eqnContainC.style.display = "none";
  } else {
    checkLimitC.style.width = "0%";
    checkLimitC.style.left = "-150%";
    btn.style.margin = "0.5%";
  }
  if ((input2.value == 0) && (input3.value == 0)) {
    eqnContainA.style.display = "none";
  }
}
// FUNTION TO COPY THE EQUATION STARTS
// function copy() {
//   var copyEqn = eqncontain;
//   copyEqn.select();
//   copyEqn.setSelectionRange(0, 99999);
//   document.execCommand("copy");
//   alert("I have copied the text: " + copyEqn.innerHTML)
// }

var input = document.getElementById("input1");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("input2").focus();
  }
});
var input = document.getElementById("input2");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("input3").focus();
  }
});
var input = document.getElementById("input3");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   input.blur();
   btn.click();
  }
});