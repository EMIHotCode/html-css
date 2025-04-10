'use strict';
const 
  colorsOrder = ['red', 'yellow red', 'green', 'yellow'],
  divTrafficLight = document.getElementById('traffic-light');

let 
  i = 0;

function nextColor() {
  divTrafficLight.className = colorsOrder[++i % colorsOrder.length];
}
