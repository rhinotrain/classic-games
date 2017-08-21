console.log("Hello! Welcome to your first graphics programming!")

var canvas = document.getElementById("bob")
var ctx = canvas.getContext('2d')

var makeWicket = function(x,y) {
    ctx.fillStyle = 'orange'
    ctx.fillRect(x+10, y, 25, 10)
    ctx.fillRect(x+40, y, 25, 10)
    ctx.fillStyle = 'brown'
    ctx.fillRect(x+60, y+5, 15, 200)
    ctx.fillRect(x+30, y+5, 15, 200)
    ctx.fillRect(x, y+5, 15, 200)
}

var makeCricketBall = function(x,y) {
    ctx.fillStyle = 'darkred'
    ctx.beginPath()
    ctx.arc(x, y, 25, 0, 2 * Math.PI)
    ctx.fill()
}

var ballX = 0

var drawFrame = function() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,800,600)
    makeWicket(50,200)
    makeCricketBall(ballX, 250)
    ballX = ballX + 1
    makeWicket(600,200)
}

var animateNextFrame = function() {
    drawFrame()
    window.requestAnimationFrame(animateNextFrame)
}
window.requestAnimationFrame(animateNextFrame)