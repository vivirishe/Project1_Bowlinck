console.log('yup')

//jQuery capturing Player's Name
$('#enterName').on('click', function(){
  // e.preventDefault()
  var newPlayer = $('#nameField').val()
  $('<h3>', {html: newPlayer}).appendTo('#name')
  $('#nameField').val('')
})



//Canvas
  var canvas = document.getElementById("canvas")
  var ctx = canvas.getContext("2d")
  var ctx2 = canvas.getContext("2d")
  var gradient = ctx.createLinearGradient(100, 80, 170, 0)
  gradient.addColorStop("0", "turquoise")
  gradient.addColorStop("0.5", "blue")
  gradient.addColorStop("1.0", "red")
  ctx.strokeStyle = gradient
  ctx.lineWidth = 2
  ctx.fillStyle = gradient

//Study if I have time to redoit
// ctx.beginPath()
//     ctx.moveTo(125,125)
//     ctx.lineTo(90,45)
//     ctx.lineTo(45,125)
//     ctx.closePath()
//     ctx.stroke()

function drawPins(){
  //pin1
  ctx.beginPath()
  ctx.moveTo(150,40)
  ctx.lineTo(180,80)
  ctx.lineTo(120,80)
  ctx.lineTo(150,40)
  ctx.stroke()
  ctx.fill()

  //pin2
  ctx.beginPath()
  ctx.moveTo(215,40)
  ctx.lineTo(245,80)
  ctx.lineTo(185,80)
  ctx.lineTo(215,40)
  ctx.stroke()
  ctx.fill()

  //pin3
  ctx.beginPath()
  ctx.moveTo(280,40)
  ctx.lineTo(310,80)
  ctx.lineTo(250,80)
  ctx.lineTo(280,40)
  ctx.stroke()
  ctx.fill()

  //pin4
  ctx.beginPath()
  ctx.moveTo(345,40)
  ctx.lineTo(375,80)
  ctx.lineTo(315,80)
  ctx.lineTo(345,40)
  ctx.stroke()
  ctx.fill()

  //pin5
  ctx.beginPath()
  ctx.moveTo(180,85)
  ctx.lineTo(210,125)
  ctx.lineTo(150,125)
  ctx.lineTo(180,85)
  ctx.stroke()
  ctx.fill()

  //pin6
  ctx.beginPath()
  ctx.moveTo(245,85)
  ctx.lineTo(275,125)
  ctx.lineTo(215,125)
  ctx.lineTo(245,85)
  ctx.stroke()
  ctx.fill()

  //pin7
  ctx.beginPath()
  ctx.moveTo(310,85)
  ctx.lineTo(340,125)
  ctx.lineTo(280,125)
  ctx.lineTo(310,85)
  ctx.stroke()
  ctx.fill()

  //pin8
  ctx.beginPath()
  ctx.moveTo(210,130)
  ctx.lineTo(240,170)
  ctx.lineTo(180,170)
  ctx.lineTo(210,130)
  ctx.stroke()
  ctx.fill()

  //pin9
  ctx.beginPath()
  ctx.moveTo(275,130)
  ctx.lineTo(305,170)
  ctx.lineTo(245,170)
  ctx.lineTo(275,130)
  ctx.stroke()
  ctx.fill()

  //pin10
  ctx.beginPath()
  ctx.moveTo(245,175)
  ctx.lineTo(275,215)
  ctx.lineTo(215,215)
  ctx.lineTo(245,175)
  ctx.stroke()
  ctx.fill()
}
drawPins()

//Ball
var ball = {
  x: 245,
  y: 500,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx2.beginPath()
    ctx2.arc(this.x,this.y,this.radius,0,2*Math.PI, true)
    ctx2.closePath()
    ctx2.fillStyle = this.color
    ctx2.fill()
    ctx2.stroke()
  }
}
ball.draw()
