console.log("Hello! Welcome to your first graphics programming!")

var canvas = document.getElementById("bob")
var ctx = canvas.getContext('2d')

var makeWicket = function(x,y) {
    ctx.fillStyle = 'orange'
    ctx.fillRect(x+10, y, 25, 10)
    ctx.fillRect(x+40, y, 25, 10)
    ctx.fillStyle = 'brown'
    ctx.fillRect(x+60, y+5, 15, 200)
    ctx.fillRect(x+30, y+5, 15, 200)
    ctx.fillRect(x, y+5, 15, 200)
}



makeWicket(50,200)
makeWicket(600,200)
