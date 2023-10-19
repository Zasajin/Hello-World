function changeColor() {
    
  var randomNumber = getRandom(5)
  var colorElement = document.getElementById('colorElement');
  colorElement.className = 'color' + randomNumber;
}

var colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', changeColor);
  
function getRandom(limit) {

  var randomNumber = Math.floor(Math.random() * limit) + 1;
  return randomNumber
}