window.onload = function() {

  var buttonG = document.getElementById("G");



  buttonG.addEventListener("click", function() {
 for (var i = -6; i <= 6; i = i + 2) {
  var x = i;
  
  if (x < 0) {
    x = Math.pow(Math.cos(x), 2);
  }
  
  if (x === 2) {
    x = Math.tan(x) + Math.pow(x, 3);
  }
  
  if (x > 2) {
    x = Math.abs(1 - Math.pow(x, 2));
  }
  
 
   alert("Результати розрахунків при аргументі " + i + " = " + x);
}

  });

};
