console.log ("On the road to Code City!")
var canvas = document.getElementById("Field")
var ctx = canvas.getContext('2d')

var drawBaseBackground = function() { // background
    ctx.fillStyle = 'cyan'
    ctx.fillRect(0, 0, 800, 600) 
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 400, 800, 200)
}

var drawRoad = function() {
    ctx.fillStyle = 'grey'
    ctx.fillRect(0, 400, 800, 40)
}

var drawFrame = function() {
    drawBaseBackground()
    drawRoad()
}

var animateNextFrame = function() {
    drawFrame()
    window.requestAnimationFrame(animateNextFrame)
}
window.requestAnimationFrame(animateNextFrame)