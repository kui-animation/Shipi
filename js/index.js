var x = null;
var y = null;
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}

console.log(x, y);