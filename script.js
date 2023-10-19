function getRandomColor() {
    
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var colorElement = document.getElementById('colorElement');
    colorElement.className = 'color' + randomNumber;
  }

  var colorButton = document.getElementById('colorButton');
  colorButton.addEventListener('click', getRandomColor);
  
