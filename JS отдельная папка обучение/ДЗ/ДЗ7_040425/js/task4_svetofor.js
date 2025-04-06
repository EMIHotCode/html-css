'use strict';

   const lightStates = {red:0,amberRed:1, green:2, amberGreen:3},
         button = document.getElementById('changeBtn'),
         redLight = document.getElementById("red"),
         yellowLight = document.getElementById("amber"),
         greenLight = document.getElementById("green");
   let currentState = lightStates.red;

   button.addEventListener('click', changeState);

   function changeState()
{
	clear();
  switch(currentState)
  {
    case lightStates.red:
    {
      redLight.classList.replace('off', 'red');
      currentState =  lightStates.amberRed;
    }
  	   break;
    case lightStates.amberRed:
    {
      yellowLight.classList.replace('off', 'yellow');
      currentState = lightStates.green;
    } 
      break;
     case lightStates.green:
    {
      greenLight.classList.replace('off', 'green');
      currentState = lightStates.amberGreen;
    }
     break;
     case lightStates.amberGreen:
    {
      yellowLight.classList.replace('off', 'yellow');
      currentState = lightStates.red;
    } 
      break;
   }
}

function clear(){
   redLight.className ="light off";
   yellowLight.className ="light off";
   greenLight.className ="light off";
}