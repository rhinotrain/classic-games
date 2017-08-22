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

skyBox()
ground()