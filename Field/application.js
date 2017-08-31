console.log ("On the road to Code City!")
var canvas = document.getElementById("field")
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
    ctx.fillStyle = 'yellow'
    var roadCount = 0
    var startingPoint = 0

    do {
        ctx.fillRect (startingPoint,415,20,5)
        startingPoint = startingPoint + 40
        roadCount += 1
    } while (roadCount < 21)
}

var drawCitySign = function() {
    ctx.fillStyle = 'grey'
    ctx.fillRect (410, 350, 7.5, 60)
    ctx.fillRect (480, 350, 7.5, 60)
    ctx.fillStyle = 'white'
    ctx.fillRect (395, 295, 110, 70)
    ctx.fillStyle = 'grey'
    ctx.fillRect (400, 300, 100, 60)
}

var drawCitySignText = function() {
    ctx.fillStyle = 'white'
    ctx.font = '16px serif'
    ctx.fillText('CODE CITY', 408, 320)
}


var drawFrame = function() {
    drawBaseBackground()
    drawRoad()
    drawCitySign()
    drawCitySignText()
}

var animateNextFrame = function() {
    drawFrame()
    window.requestAnimationFrame(animateNextFrame)
}
window.requestAnimationFrame(animateNextFrame)