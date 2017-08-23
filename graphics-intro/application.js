console.log("Hello! Merge the window functions guy!")

var canvas = document.getElementById("bob")
var ctx = canvas.getContext('2d')

var drawSkyBox = function() {
    ctx.fillStyle = 'cyan'
    ctx.fillRect(0,0,800,600)
}

var drawGround = function() {
    ctx.fillStyle = 'green'
    ctx.fillRect(0,400,800,200)
}

var drawTree = function(x, y, isDarkGreen) {
    ctx.fillStyle = '#481a05' // stalk
    ctx.fillRect(x + 5, y - 5, 10, 10)

    if (isDarkGreen) {
        ctx.fillStyle = '#07410a'
    } else {
        ctx.fillStyle = '#026c0f'
    }
    ctx.beginPath() // top bushel
    ctx.moveTo(x, y)
    ctx.lineTo(x + 10, y - 25)
    ctx.lineTo(x + 20, y)
    ctx.fill()

    ctx.beginPath() // bottom bushel
    ctx.moveTo(x, y - 5)
    ctx.lineTo(x + 10, y - 30)
    ctx.lineTo(x + 20, y - 5)
    ctx.fill()
}

var drawFrontLineOfTrees = function(x, y, length) {
    var treeCount = 0
    do {
        drawTree(x, y, false)
        x = x + 25
        treeCount += 1
    } while (length > treeCount)
}

var drawBackLineOfTrees = function(x, y, length) {
    var treeCount = 0
    do {
        drawTree(x, y, true)
        x = x + 25
        treeCount += 1
    } while (length > treeCount)
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

var drawPowerLines = function(x, y, count) {
    for (var powerLineCount = 0; powerLineCount < count; powerLineCount += 1) {
        drawPylon(x, y)
        drawPowerCable(x + 15, y + 5)
        x = x + 50
    }
}

var drawWindow = function(x,y) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(x,y,10,10)
}

var drawWindowGrid = function(xStart, yStart, height, width) {
    var windowXCount = 0
    var x = xStart
    do {
        windowXCount += 1
        var windowYCount = 0
        var y = yStart
        do {
            drawWindow(x, y)
            y = y + 20
            windowYCount += 1
        } while (windowYCount < height)
        x = x + 20
    } while (windowXCount < width)
}

drawSkyBox()
drawGround()
drawBackLineOfTrees(-15, 395, 34)
drawFrontLineOfTrees(0, 395, 33)
drawRoad()
drawCity()
drawWindowGrid(160, 210, 9, 3)
drawWindowGrid(290, 160, 12, 4)
drawWindowGrid(410, 230, 8, 3)
drawWindowGrid(510, 160, 12, 4)
drawPowerLines(0, 360, 17)
