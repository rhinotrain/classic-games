console.log("Hello! Merge the window functions guy!")

var canvas = document.getElementById("bob")
var ctx = canvas.getContext('2d')

var drawSkyBox = function() {
    ctx.fillStyle = 'cyan'
    ctx.fillRect(0,0,800,600)
}

var drawGround = function() {
    ctx.fillStyle = 'darkgreen'
    ctx.fillRect(0,400,800,200)
}

var drawRoad = function() {
    ctx.fillStyle = 'darkgrey'
    ctx.fillRect(0,400,800,40)

    ctx.fillStyle = 'yellow'
    var roadCount = 0
    var a1 = 0

    do {
        ctx.fillRect (a1,415,20,5)
        a1 = a1 + 40
        roadCount += 1
    } while (roadCount < 21)
}

var drawCity = function() {
    ctx.fillStyle = 'grey'
    ctx.fillRect(150, 200, 100, 200)
    ctx.fillRect(280, 150, 110, 250)
    ctx.fillRect(400, 220, 90, 180)
    ctx.fillRect(500, 150, 110, 250)
    ctx.fillRect(325, 100, 20, 50)
}

var drawPylon = function(x,y) {
    ctx.fillStyle = 'brown'
    ctx.fillRect(x,y,10,45)
    ctx.fillRect(x - 10,y + 5,30,5)
}

var drawPowerCable = function(x,y) {
    ctx.beginPath(x,y)
    ctx.moveTo(x,y)
    ctx.lineTo(x + 10,y + 10)
    ctx.lineTo(x + 20,y + 10)
    ctx.lineTo(x + 30,y)
    ctx.stroke()
}

var drawPowerLines = function() {
    var powerLineCount = 0
    var x = 0
    do {  
        drawPylon(x, 360)
        drawPowerCable(x+15, 365)
        powerLineCount += 1
        x = x + 50
    } while (powerLineCount < 16)
}

var drawWindow = function(x,y) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(x,y,10,10)
}

var drawWindowRow = function(x, y, length) {
    var windowCount = 0
    do {
        drawWindow(x,y)
        x = x + 20
        windowCount += 1
    } while (windowCount < length)
}

var drawWindowGrid = function(x, y, height, width) {
    var windowCount = 0
    do {
        drawWindowRow(x,y,width)
        y = y + 20
        windowCount += 1
    } while (windowCount < height)
}

drawSkyBox()
drawGround()
drawRoad()
drawCity()
drawWindowGrid(160, 210, 8, 3)
drawWindowGrid(290, 160, 11, 4)
drawWindowGrid(290, 160, 11, 4)
drawPowerLines()
