//your JS code here. If required.
let input = document.getElementById("display");
let expression = "";
function solve(e) {
  // console.log(e)
  if (e === "ans") {
    // evaluate the expression
    let result = eval(expression);
    console.log(result);
    input.value = result;
  } else if (e === "clear") {
    expression = "";
    input.value = "";
  } else {
    expression += e;
    console.log(expression);
    input.value = expression;
  }
}

function backspace() {
    var inputValue = input.value;

    var newValue = inputValue.slice(0, -1);

    input.value = newValue;
  }
