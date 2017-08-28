console.log("Hello! Is there a way to fix the car layering issue?")

var canvas = document.getElementById("bob")
var ctx = canvas.getContext('2d')

var drawSkyBox = function() {
    ctx.fillStyle = 'cyan' // sky
    ctx.fillRect(0,0,800,600)
    ctx.fillStyle = 'green' // ground
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

var drawLineOfTrees = function(x, y, length, isDarkGreen) {
    var treeCount = 0
    do {
        drawTree(x, y, isDarkGreen)
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
    ctx.fillStyle = 'grey' // building
    ctx.fillRect(150, 200, 100, 200)
    ctx.fillRect(280, 150, 110, 250)
    ctx.fillRect(400, 220, 90, 180)
    ctx.fillRect(500, 150, 110, 250)
    ctx.fillRect(325, 100, 20, 50)

    ctx.fillStyle = 'black' // shade
    ctx.fillRect(230, 200, 20, 200)
    ctx.fillRect(375, 150, 20, 250)
    ctx.fillRect(475, 220, 20, 180)
    ctx.fillRect(590, 150, 20, 250)
    ctx.fillRect(340, 100, 5, 50)
}

var drawPylon = function(x,y) {
    ctx.fillStyle = 'brown' // long pole
    ctx.fillRect(x, y, 10, 45)
    ctx.fillRect(x - 10, y + 5, 30, 5)
    ctx.fillRect(x - 5, y + 9, 10, 2.5)

    ctx.fillStyle = 'black' // shade
    ctx.fillRect(x + 7, y, 3, 45)
    ctx.fillRect(x - 10, y + 9, 30, 2.5)

    ctx.fillStyle = 'brown' // middle
    ctx.fillRect(x, y + 9, 7, 2.5)
    
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

var drawWhiteCloud = function(x, y) {

    ctx.fillStyle = 'grey'
    ctx.beginPath()
    ctx.arc(x, y + 10, 30, 0, Math.PI * 2, true)
    ctx.arc(x + 20, y , 30, 0, Math.PI * 2, true)
    ctx.arc(x + 40, y + 10, 30, 0, Math.PI * 2, true)
    ctx.fill()

    ctx.fillStyle = 'white'
    ctx.beginPath()
    ctx.arc(x, y, 30, 0, Math.PI * 2, true)
    ctx.arc(x + 20, y - 10, 30, 0, Math.PI * 2, true)
    ctx.moveTo(x + 40, y)
    ctx.arc(x + 40, y, 30, 0, Math.PI * 2, true)
    ctx.fill()
}

var drawCar = function(x, y, colour) {
    ctx.fillStyle = colour // windows
    ctx.fillRect(x, y, 40, 20)

    ctx.fillRect(x+10, y-10, 20, 20)

    ctx.fillStyle = 'black' // tires
    ctx.fillRect(x + 5, y + 10, 10, 10)
    ctx.fillRect(x + 25, y + 10, 10, 10)

    ctx.fillStyle = 'white' // windows
    ctx.fillRect(x + 10, y - 8, 5, 8)
    ctx.fillRect(x + 25, y -8, 5, 8)
}   

var car1 = {x: -20, y: 415, goingForward: true, colour: 'red'}
var car2 = {x: 820, y: 515, goingForward: true, colour: 'blue'}
var cloud1 = {x: 80, y: 100, goingForward: true}
var cloud2 = {x: 700, y: 210, goingForward: true}

// misc variables

var whiteCloudStartingPointX = -80

var drawFrame = function () { // animation
    drawSkyBox()
    drawLineOfTrees(12, 395, 33, true)
    drawLineOfTrees(0, 395, 33, false)
    drawRoad()
    drawWhiteCloud(cloud1.x, cloud1.y)

    cloud1.x = cloud1.x + 0.25
    if (cloud1.x > 830) {
        cloud1.x = whiteCloudStartingPointX 
    }

    drawWhiteCloud(cloud2.x, cloud2.y)

    cloud2.x = cloud2.x + 0.25
    if (cloud2.x > 830) {
        cloud2.x = whiteCloudStartingPointX 
    }
    

    drawCity()
    drawWindowGrid(160, 210, 9, 3)
    drawWindowGrid(290, 160, 12, 4)
    drawWindowGrid(410, 230, 8, 3)
    drawWindowGrid(510, 160, 12, 4)
    drawPowerLines(0, 360, 17)
    drawCar(car1.x, car1.y, car1.colour) // red car
   
    if (car1.goingForward) {
        car1.x = car1.x + 5
    } else {
        car1.x = car1.x - 5
    }

    if (car1.x > 800) {
        car1.goingForward = false
        car1.y = car1.y - 25
    }

    if (car1.x < -20) {
         car1.goingForward = true
        car1.y = car1.y + 25
    }

    drawCar(car2.x, car2.y, car2.colour) // blue car
   
    if (car2.goingForward) {
        car2.x = car2.x + 5
    } else {
        car2.x = car2.x - 5
    }

    if (car2.x > 800) {
        car2.goingForward = false
        car2.y = car2.y - 25
    }

    if (car2.x < -20) {
        car2.goingForward = true
        car2.y = car2.y + 25
    }
}

var animateNextFrame = function() {
    drawFrame()
    window.requestAnimationFrame(animateNextFrame)
}
window.requestAnimationFrame(animateNextFrame)