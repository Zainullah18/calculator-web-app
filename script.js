const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  updateFontSize();
}

function clearDisplay() {
  display.value = "";
  updateFontSize();
}

function calculate() {
  try {
    display.value = eval(display.value);
    updateFontSize();
  } catch (error) {
    display.value = "error";
    updateFontSize();
  }
}

function updateFontSize() {
  const length = display.value.length;
  if (length > 7) {
    // Decrease font size smoothly as digits increase
    // 3.5rem is the baseline max size for 7 digits
    const newSize = Math.max(1.5, 3.5 * (7 / length));
    display.style.fontSize = `${newSize}rem`;
  } else {
    // Reset to CSS default (clamp value)
    display.style.fontSize = "";
  }
}

document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        display.value = "";
        updateFontSize();
    }
    if (event.key === "Backspace"){
        display.value = display.value.slice(0, -1);
        updateFontSize();
        event.preventDefault();
    }
});