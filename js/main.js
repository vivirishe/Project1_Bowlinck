console.log('yup')

//jQuery capturing Player's Name
$('#enterName').on('click', function(){
  // e.preventDefault()
  var newPlayer = $('#nameField').val()
  $('<h3 />', {html: newPlayer}).appendTo('#name')
  $('#nameField').val('')
})

//jQuery selecting Level
var level
var selectLevel = 0
var shootsLeft = 0
var score = 0
//var shootsLeft = 0
//setting number of shootsLeft and setting score to 0
$('#easy').on('click', function(){
  selectLevel = $('#easy').val(level).addClass('levelGameTracker')
  $('<h3 />', {html: selectLevel}).appendTo('#level')
  shootsLeft = 6
  $('<h3>', {html: shootsLeft}).appendTo('#shoots')
  score = 0
  $('<h3>', {html: score}).appendTo('#score')
  level = ''
})

$('#medium').on('click', function(){
  selectLevel = $('#medium').val(level).addClass('levelGameTracker')
  $('<h3 />', {html: selectLevel}).appendTo('#level')
  shootsLeft = 5
  $('<h3>', {html: shootsLeft}).appendTo('#shoots')
  score = 0
  $('<h3>', {html: score}).appendTo('#score')
  level = ''
})

$('#advanced').on('click', function(){
  selectLevel = $('#advanced').val(level).addClass('levelGameTracker')
  $('<h3 />', {html: selectLevel}).appendTo('#level')
  shootsLeft = 4
  $('<h3>', {html: shootsLeft}).appendTo('#shoots')
  score = 0
  $('<h3>', {html: score}).appendTo('#score')
  level = ''
})
//=================================================

//=================================================
//Canvas
  var canvas = document.getElementById("canvas")
  var ctx = canvas.getContext("2d")
  var gradient = ctx.createLinearGradient(100, 80, 170, 0)
  gradient.addColorStop("0", "turquoise")
  gradient.addColorStop("0.5", "blue")
  gradient.addColorStop("1.0", "red")
  ctx.strokeStyle = gradient
  ctx.lineWidth = 2


  var x = 245
  var y = 500
  var radius = 25
  //moving the ball up
//x = 0 && y = -2
//value of y it will define the velocity of the ball
  var dx = 0
  var dy = -3
 //moving indicators (left and right)
  var rightPressed = false;
  var leftPressed = false;

  //Ball
  function drawBall(){
    ctx.beginPath()
    ctx.arc(x, y, radius, 0,2*Math.PI)
    ctx.fillStyle = 'blue'
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }

  //drawing Pins
  //Study if I have time to redoit
  // ctx.beginPath()
  //     ctx.moveTo(125,125)
  //     ctx.lineTo(90,45)
  //     ctx.lineTo(45,125)
  //     ctx.closePath()
  //     ctx.stroke()
  function drawPins(){

    ctx.fillStyle = gradient
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

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPins()
    drawBall()


    x += dx
    y += dy
  }
  setInterval(draw, 10)
