var hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

var getRandomValue = function (num) {
  var randomValue = Math.floor(Math.random() * num);
  return randomValue;
};

var getRandomHexValue = function () {
  var randomHexValue = hexValues[getRandomValue(16)];

  return randomHexValue;
};

var getColors = function () {
  var color = ['#'];
  for (var i = 0; i < 6; i++) {
    color.push(getRandomHexValue());
  }

  color = color.join('');
  console.log(color);
  return color;
};

var getGreys = function () {
  var value = [];
  value.push(getRandomHexValue());
  value.push(getRandomHexValue());
  value = value.join('');
  var color = '#' + value.toString() + value.toString() + value.toString();
  console.log(color);
  return color;
};

var getHexColor = function () {
  var randomChoice = getRandomValue(3);
  if (randomChoice === 1) {
    return getGreys();
  } else {
    return getColors();
  }
};

window.onkeydown = function () {
  var bodyColor = getHexColor();
  var headerColor = getHexColor();

  //var footerColor = getGreys();
  document.getElementById('body').style.backgroundColor = bodyColor;
  document.getElementById('bodyColor').innerHTML = bodyColor;
  document.getElementById('header').style.backgroundColor = headerColor;
  document.getElementById('headerColor').innerHTML = headerColor;
  document.getElementById('footer').style.backgroundColor = headerColor;
  document.getElementById('footerColor').innerHTML = headerColor;

};

window.onmousedown = function () {
  var bodyColor = getHexColor();
  var headerColor = getHexColor();

  //var footerColor = getGreys();
  document.getElementById('body').style.backgroundColor = bodyColor;
  document.getElementById('bodyColor').innerHTML = bodyColor;
  document.getElementById('header').style.backgroundColor = headerColor;
  document.getElementById('headerColor').innerHTML = headerColor;
  document.getElementById('footer').style.backgroundColor = headerColor;
  document.getElementById('footerColor').innerHTML = headerColor;

};
