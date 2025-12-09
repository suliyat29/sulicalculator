let display = document.getElementById("display");

function press(value) {
  display.innerText += value;
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

function clearDisplay() {
  display.innerText = "";
}

function removeLast() {
  display.innerText = display.innerText.slice(0, -1);
}
