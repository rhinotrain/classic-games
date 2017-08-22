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
   
}

var city = function() {
    ctx.fillStyle = 'grey'
    ctx.fillRect(150,200,100,200)
    ctx.fillRect(280,150,110,250)
    ctx.fillRect(400,220,90,180)
    ctx.fillRect(500,150,110,250)
    ctx.fillRect(325,100,20,50)
}

skyBox()
ground()
road()
city()