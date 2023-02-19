// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set color to blue
  ctx.fillRect(120, 10, 5, 5);        // Fill a rectangle with the color

  ctx.fillStyle = 'rgba(252,210,153)'; // Set color to blue
  ctx.fillRect(200, 100, 5, 5); 
}
