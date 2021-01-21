function solveEqn() {
  var a = input1.value;
  var b = input2.value;
  var c = input3.value;
  var bSq = Math.pow(b,2);
  var acNume = 4 * a * c;
  var bac = bSq - acNume;
  var bacSqrt = Math.sqrt(bac);
  var numeOne = -b + bacSqrt;
  var numeTwo = -b - bacSqrt;
  var deno = a * 2;
  var xone = numeOne/deno;
  var xtwo = numeTwo/deno;
  var xOne = Math.round((xone) * 100) / 100;
  var xTwo = Math.round((xtwo) * 100) / 100;
  var eqnAnswer = document.getElementById("answer");
  var checkCorrect = document.getElementById("checkLimitTooltipC");
  eqnAnswer.innerHTML = "x = " + xOne + " or x = " + xTwo;
  if ((isNaN(xOne)) || (isNaN(xTwo))) {
    eqnAnswer.innerHTML = "";
    checkCorrect.innerHTML = "This is not a valid Quadratic Problem";
    checkCorrect.style.width = "532%";
    checkCorrect.style.left = "-405%";
    checkCorrect.style.transition = "0.7s";
    document.getElementById("checkLimitTooltipA").style.width = "0%";
    document.getElementById("checkLimitTooltipB").style.width = "0%";
    document.getElementById("button").style.margin = "2.5%";
  } else {
    checkCorrect.style.width = "0%";
    checkCorrect.style.left = "150%";
    document.getElementById("button").style.margin = "0.5%";
  }
}