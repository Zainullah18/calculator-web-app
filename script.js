const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}


document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        display.value = "";
    }
    if (event.key === "Backspace"){
        display.value = display.value.slice(0, -1);
        event.preventDefault();
    }
});