console.log ("Why does wasd move paddle slower than arrow keys?")
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

const PADDLE_WIDTH = 20
const PADDLE_HEIGHT = 80

var drawPaddle = function(x, y) {
    ctx.fillStyle = 'white'
    ctx.fillRect(x, y, PADDLE_WIDTH, PADDLE_HEIGHT)
}

var drawBall = function(x, y, size) {
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.fill()
}

var updateBall = function(ball) {
    ball.x = ball.x + 0.50
    ball.y = ball.y - 0.50
}

var paddle1Y = 30
var paddle2Y = 30
var ball = {x: 400, y: 300,size: 10}

const SCREEN_HEIGHT = canvas.clientHeight

const BORDER_PADDING = 5
const PADDLE_SPEED = 5

var drawFrame = function () { // animation
    ctx.fillStyle = 'black' // background
    
    ctx.fillRect(0,0,800,600) // paddleLeft
    drawPaddle(100, paddle1Y)
    if (keyState2.up && paddle1Y > BORDER_PADDING) {
        paddle1Y = paddle1Y - PADDLE_SPEED
    }

    if (keyState2.down && paddle1Y < SCREEN_HEIGHT - BORDER_PADDING - PADDLE_HEIGHT) {
        paddle1Y = paddle1Y + PADDLE_SPEED
    }
    drawPaddle(650, paddle2Y) // paddleRight
    if (keyState.up && paddle2Y > BORDER_PADDING) {
        paddle2Y = paddle2Y - PADDLE_SPEED
    }

    if (keyState.down && paddle2Y < SCREEN_HEIGHT - BORDER_PADDING - PADDLE_HEIGHT) {
        paddle2Y = paddle2Y + PADDLE_SPEED
    }

    drawBall(ball.x, ball.y, ball.size)
    updateBall(ball)

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

  if (keyName == "w")    keyState2.up = true
  if (keyName == "s")  keyState2.down = true
  if (keyName == "a")  keyState2.left = true
  if (keyName == "d")  keyState2.right = true
})

document.addEventListener('keyup', function(e) {
  var keyName = e.key || e["keyIdentifier"] 
  if (keyName == "ArrowUp"    || keyName == "Up")    keyState.up = false
  if (keyName == "ArrowDown"  || keyName == "Down")  keyState.down = false
  if (keyName == "ArrowLeft"  || keyName == "Left")  keyState.left = false
  if (keyName == "ArrowRight" || keyName == "Right") keyState.right = false
    
  if (keyName == "w")    keyState2.up = false
  if (keyName == "s")  keyState2.down = false
  if (keyName == "a")  keyState2.left = false
  if (keyName == "d") keyState2.right = false
})
