console.log("Hello! Welcome to your first graphics programming!")

var canvas = document.getElementById("bob")
var ctx = canvas.getContext('2d')

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

    ctx.fillStyle = 'yellow'
    var roadTimer = 0
    var a1 = 0

    do {
            ctx.fillRect (a1,415,20,5)
            a1 = a1 + 40
            roadTimer += 1
            
       } while (roadTimer < 21)
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
    var powerLinesTimer = 0
    var x1 = 0
    var y1 = 360
    var x2 = 15
    var y2 = 365

    do {
        ctx.fillRect(x1,y1,10,45)
        ctx.fillRect(x1 - 10,y1 + 5,30,5)
        
        ctx.fillRect(x1 + 50,y1,10,45)
        ctx.fillRect(x1 + 40,y1 + 5,30,5)

        ctx.beginPath()
        ctx.moveTo(x2,y2)
        ctx.lineTo(x2 + 10,y2 + 10)
        ctx.lineTo(x2 + 20,y2 + 10)
        ctx.lineTo(x2 + 30,y2)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(x2 + 50,y2)
        ctx.lineTo(x2 + 60,y2 + 10)
        ctx.lineTo(x2 + 70,y2 + 10)
        ctx.lineTo(x2 + 80,y2)
        ctx.stroke()
        powerLinesTimer +=1
        x1 =  x1 + 50
        x2 = x2 + 50
       } while (powerLinesTimer < 16)
}

skyBox()
ground()
road()
city()
powerLines()
