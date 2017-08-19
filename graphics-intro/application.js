console.log("Hello! Welcome to your first graphics programming!")

var canvas = document.getElementById("bob")
var ctx = canvas.getContext('2d')

ctx.fillStyle = 'orange'
ctx.fillRect(305, 90, 40, 20)
ctx.fillRect(365, 90, 40, 20)
ctx.fillStyle = 'brown'
ctx.fillRect(400, 100, 30, 400)
ctx.fillRect(340, 100, 30, 400)
ctx.fillRect(280, 100, 30, 400)
