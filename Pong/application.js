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

var updatePaddle = function(paddle, keyState) {
    if (keyState.up && paddle.y > BORDER_PADDING) {
        paddle.y = paddle.y - PADDLE_SPEED
    }

    if (keyState.down && paddle.y < SCREEN_HEIGHT - BORDER_PADDING - PADDLE_HEIGHT) {
        paddle.y = paddle.y + PADDLE_SPEED
    }
}

var drawBall = function(x, y, size) {
    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.fill()
}

var updateBall = function(ball) {
    if (ball.goingForward) {
        ball.x = ball.x + 5
    } else {
        ball.x = ball.x - 5
    }

    if (ball.x > 795) {
        ball.goingForward = false
    }

    if (ball.x < 5) {
        ball.goingForward = true
    }

    if (ball.goingUp) {
        ball.y = ball.y - 5
    } else {
        ball.y = ball.y + 5
    }

    if (ball.y < 5) {
        ball.goingUp = false
    }

     if (ball.y > 595) {
        ball.goingUp = true
    }
}

var paddle1 = {x: 100, y: 30}
var paddle2 = {x: 650, y: 30}
var ball = {x: 400, y: 300, size: 10, goingForward: true, goingUp: true}

const SCREEN_HEIGHT = canvas.clientHeight
const BORDER_PADDING = 5
const PADDLE_SPEED = 5

var drawFrame = function () { // animation
    ctx.fillStyle = 'black' // background
    
    ctx.fillRect(0,0,800,600) // paddleLeft
    drawPaddle(paddle1.x, paddle1.y)
    updatePaddle(paddle1, keyState2)

    drawPaddle(paddle2.x, paddle2.y) // paddleRight
    updatePaddle(paddle2, keyState)

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
