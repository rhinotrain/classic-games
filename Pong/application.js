var canvas = document.getElementById("screen")
var ctx = canvas.getContext('2d')

// This object always contains the current key state

var keyState = {
  up: false,
  down: false,
  left: false,
  right: false,
}

var keyState2 = {
  up: false,
  down: false,
  left: false,
  right: false,
}

var drawPaddle = function(x, y) {
    ctx.fillStyle = 'white'
    ctx.fillRect(x, y, 20, 80)
}


var barY = 30


var drawFrame = function () { // animation
    ctx.fillStyle = 'black' // background

    ctx.fillRect(0,0,800,600) // paddleLeft
    drawPaddle(100, barY)
    if (keyState2.up) {
        barY = barY - 5
    }

    if (keyState2.down) {
        barY = barY + 5
    }
     drawPaddle(650, barY) // paddleRight
    if (keyState.up) {
        barY = barY - 5
    }

    if (keyState.down) {
        barY = barY + 5
    }
}


var animateNextFrame = function() {
    drawFrame()
    window.requestAnimationFrame(animateNextFrame)
}
window.requestAnimationFrame(animateNextFrame)


//  Update keyState based on user input
document.addEventListener('keydown', function(e) {
  var keyName = e.key || e["keyIdentifier"] // Chrome vs Safari
  if (keyName == "ArrowUp"    || keyName == "Up")    keyState.up = true
  if (keyName == "ArrowDown"  || keyName == "Down")  keyState.down = true
  if (keyName == "ArrowLeft"  || keyName == "Left")  keyState.left = true
  if (keyName == "ArrowRight" || keyName == "Right")  keyState.right = true

  if (keyName == "ArrowUp"    || keyName == "w")    keyState2.up = true
  if (keyName == "ArrowDown"  || keyName == "s")  keyState2.down = true
  if (keyName == "ArrowLeft"  || keyName == "a")  keyState2.left = true
  if (keyName == "ArrowRight" || keyName == "d")  keyState2.right = true
})

document.addEventListener('keyup', function(e) {
  var keyName = e.key || e["keyIdentifier"] 
  if (keyName == "ArrowUp"    || keyName == "Up")    keyState.up = false
  if (keyName == "ArrowDown"  || keyName == "Down")  keyState.down = false
  if (keyName == "ArrowLeft"  || keyName == "Left")  keyState.left = false
  if (keyName == "ArrowRight" || keyName == "Right") keyState.right = false

    
  if (keyName == "ArrowUp"    || keyName == "w")    keyState2.up = false
  if (keyName == "ArrowDown"  || keyName == "s")  keyState2.down = false
  if (keyName == "ArrowLeft"  || keyName == "a")  keyState2.left = false
  if (keyName == "ArrowRight" || keyName == "Right") keyState2.right = false
})
