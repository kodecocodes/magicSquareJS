
function enterEditPreMode() {
  const parent = this.parentNode;
  const validationLabel = document.getElementById("validation");
  validationLabel.classList.add("hidden");
  var textArea = document.createElement("textarea");
  const content = this.textContent;
  const rows = content.split(/\r\n|\r|\n/);
  const colCount = Math.max(...rows.map(r => r.length));
  textArea.textContent = content;
  textArea.rows = rows.length;
  textArea.cols = colCount;
  textArea.addEventListener("blur", endEditPreMode);
  textArea.className = "flex-item";
  parent.replaceChild(textArea, this);
  textArea.focus();
}

function endEditPreMode() {
  const parent = this.parentElement;
  var preElement = document.createElement("pre");
  preElement.textContent = this.value;
  preElement.id = "magic-square-display";
  preElement.className = "flex-item";
  preElement.addEventListener("click", enterEditPreMode);
  parent.replaceChild(preElement, this);
  validateMagicSquare();
}

function validateMagicSquare() {
  const squareString = document.getElementById("magic-square-display").textContent;
  const validationLabel = document.getElementById("validation");
  if (/\S/.test(squareString)) {
    // string is not empty and not just whitespace
    validationLabel.classList.remove("hidden");

    const square = Square.fromString(squareString);
    if (square.isMagic()) {
      validationLabel.textContent = "This is a magic square!";
      validationLabel.classList.remove("invalid");
      validationLabel.classList.add("valid");
    } else {
      validationLabel.textContent = "This is not a magic square.";
      validationLabel.classList.remove("valid");
      validationLabel.classList.add("invalid");
    }    
  } else {
    validationLabel.classList.add("hidden");
  }
}


/**
 * 
 * @param {Event} event 
 */
function performMagicSquareGeneration(event) {
  event.preventDefault();
  const inputElement = document.getElementById("magic-square-size");
  const outputElement = document.getElementById("magic-square-display");
  const order = Number(inputElement.value);
  try {
    const ms = MagicSquareGenerator.generateMagicSquare(order);
    outputElement.textContent = ms.toString();
    validateMagicSquare();
  } catch (e) {
    alert("Unable to generate magic square for that order.");
    console.log(e);
  }
}

document.addEventListener("DOMContentLoaded", event => {
  const outputElement = document.getElementById("magic-square-display");
  outputElement.addEventListener("click", enterEditPreMode);

  const inputElement = document.getElementById("magic-square-size");
  const generateButton = document.getElementById("magic-square-generate-button");
  generateButton.addEventListener("click", performMagicSquareGeneration);
  inputElement.addEventListener("keyup", event => {
    if (event.code == "Enter") {
      performMagicSquareGeneration(event);
    }
  });
});

