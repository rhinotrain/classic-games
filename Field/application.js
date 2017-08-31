console.log ("On the road to Code City!")
var canvas = document.getElementById("field")
var ctx = canvas.getContext('2d')

var drawBaseBackground = function() { // background
    ctx.fillStyle = 'cyan'
    ctx.fillRect(0, 0, 800, 600) 
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 400, 800, 200)
}

var drawRoad = function() { // road
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

var drawCitySign = function() { // city sign graphic
    ctx.fillStyle = 'grey'
    ctx.fillRect (410, 350, 7.5, 60)
    ctx.fillRect (480, 350, 7.5, 60)
    ctx.fillStyle = 'white'
    ctx.fillRect (395, 295, 110, 70)
    ctx.fillStyle = 'grey'
    ctx.fillRect (400, 300, 100, 60)
}

var drawCitySignText = function() { // city sign text
    ctx.fillStyle = 'white'
    ctx.font = '16px serif'
    ctx.fillText('CODE CITY', 408, 320)

    ctx.font = '10px serif'
    ctx.fillText('60 Miles', 420, 345)

    ctx.fillStyle = 'white' // arrow
    ctx.fillRect ( 412, 328, 5, 25)
    ctx.fillRect ( 412, 350, 50, 5)
    ctx.beginPath()
    ctx.moveTo(462, 355)
    ctx.lineTo(492, 355)
    ctx.lineTo(462, 335)
    ctx.fill()
}


var drawFrame = function() { // animation
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