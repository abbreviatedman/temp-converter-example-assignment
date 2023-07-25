function removeSpaces(userInput) {
  return userInput.replaceAll(" ", "");
}

function getMeasurement(userInput) {
  return userInput[userInput.length - 1]
}

function getDegrees(userInput) {
  return Number(userInput.slice(0, -1));
}

function convertCToF(degreesC) {
  return degreesC / 5 * 9 + 32;
}

function convertFToC(degreesF) {
  return (degreesF - 32) / 9 * 5;
}
