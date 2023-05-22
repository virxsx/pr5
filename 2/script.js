window.onload = function() {
  // Отримання посилань на кнопки
  var buttonG = document.getElementById("G");
  var buttonGr = document.getElementById("Gr");
  var buttonC = document.getElementById("C");
  var buttonCI = document.getElementById("CI");
  var buttonSH = document.getElementById("SH");

  // Додавання обробників подій для кожної кнопки
  buttonG.addEventListener("click", function() {
    alert("Кожному мила своя сторона.");
  });

  buttonGr.addEventListener("click", function() {
    alert("Усвідомлена любов до свого народу не поєднується з ненавистю до інших.");
  });

  buttonC.addEventListener("click", function() {
    alert("Ті, що виїздять за море, міняють небо, а не душу.");
  });

  buttonCI.addEventListener("click", function() {
    alert("Для нас дорогі батьки, дорогі діти, близькі, родичі; але всі уявлення про любов до чого-небудь поєднані в одному слові «вітчизна».");
  });

  buttonSH.addEventListener("click", function() {
    alert("Мова — це глибина тисячоліть.");
  });
};
