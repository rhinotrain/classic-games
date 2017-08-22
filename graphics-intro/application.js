console.log("Hello! Welcome to your first graphics programming!")

var canvas = document.getElementById("bob")
var ctx = canvas.getContext('2d')
var powerLinesTimer = 0

var skyBox = function() {
    ctx.fillStyle = 'cyan'
    ctx.fillRect(0,0,800,600)
}

var ground = function() {
    ctx.fillStyle = 'darkgreen'
    ctx.fillRect(0,400,800,200)
}

var road = function() {
    ctx.fillStyle = 'darkgrey'
    ctx.fillRect(0,400,800,40)
}

var city = function() {
    ctx.fillStyle = 'grey'
    ctx.fillRect(150,200,100,200)
    ctx.fillRect(280,150,110,250)
    ctx.fillRect(400,220,90,180)
    ctx.fillRect(500,150,110,250)
    ctx.fillRect(325,100,20,50)
}

var powerLines = function() {
    ctx.fillStyle = 'brown'
    
    ctx.fillRect(0,360,10,45)
    ctx.fillRect(-10,365,30,5)
    
    ctx.fillRect(50,360,10,45)
    ctx.fillRect(40,365,30,5)

    ctx.beginPath()
    ctx.moveTo(15, 365)
    ctx.lineTo(25,375)
    ctx.lineTo(35,375)
    ctx.lineTo(45, 365)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(65, 365)
    ctx.lineTo(75,375)
    ctx.lineTo(85,375)
    ctx.lineTo(95, 365)
    ctx.stroke()
}

skyBox()
ground()
road()
city()
powerLines()
