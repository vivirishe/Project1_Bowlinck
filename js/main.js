console.log('yup')

//jQuery capturing Player's Name
$('#enterName').on('click', function(){
  // e.preventDefault()
  var newPlayer = $('#nameField').val()
  $('<h3 />', {html: newPlayer}).appendTo('#name')
  $('#nameField').val('')
})
//startGame button
  $('#startGame').on('click', function(){

    $('#startGame').text('Reset')
      //variables for Pins
     pin1 = true
     pin2 = true
     pin3 = true
     pin4 = true
     pin5 = true
     pin6 = true
     pin7 = true
     pin8 = true
     pin9 = true
     pin10 = true

  })

//jQuery selecting Level
var selectLevel = 0
var shootsLeft = 0
var score = 0
//var startResetButton = $('#startGame').text()
//setting number of shootsLeft and setting score to 0
//how to compare with Start and Reset for not allowing to change level once tye game starts
if ($('#startGame').text() === 'Start Game') {
  $('#easy').on('click', function(){
    //selectLevel = $('#easy').val(level).addClass('levelGameTracker')
    shootsLeft = 6
    score = 0
    selectLevel = $('#easy').text()
    if(($('#level').children().length > 1) && ($('#shoots').children().length > 1) && ($('#score').children().length > 1)){
      $('#level').children().eq(1).html(selectLevel)
      $('#shoots').children().eq(1).html(shootsLeft)
      $('#score').children().eq(1).html(score)
    }else{
      $('<h3 />', {html: selectLevel}).appendTo('#level')
      $('<h3 />', {html: shootsLeft}).appendTo('#shoots')
      $('<h3 />', {html: score}).appendTo('#score')
    }
  })

  $('#medium').on('click', function(){
    score = 0
    shootsLeft = 5
    selectLevel = $('#medium').text()
    if(($('#level').children().length > 1) && ($('#shoots').children().length > 1) && ($('#score').children().length > 1)){
      $('#level').children().eq(1).html(selectLevel)
      $('#shoots').children().eq(1).html(shootsLeft)
      $('#score').children().eq(1).html(score)
    }else{
      $('<h3 />', {html: selectLevel}).appendTo('#level')
      $('<h3>', {html: shootsLeft}).appendTo('#shoots')
      $('<h3>', {html: score}).appendTo('#score')
    }
  })

  $('#advanced').on('click', function(){
    shootsLeft = 4
    score = 0
    selectLevel = $('#advanced').text()
    if(($('#level').children().length > 1) && ($('#shoots').children().length > 1) && ($('#score').children().length > 1)){
      $('#level').children().eq(1).html(selectLevel)
      $('#shoots').children().eq(1).html(shootsLeft)
      $('#score').children().eq(1).html(score)
    }else{
      $('<h3 />', {html: selectLevel}).appendTo('#level')
      $('<h3>', {html: shootsLeft}).appendTo('#shoots')
      $('<h3>', {html: score}).appendTo('#score')
    }
  })
}
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
  var dy = -1
 //moving indicators (left and right)
  var rightPressed = false
  var leftPressed = false
  var upPressed = false
var pin1
var pin2
var pin3
var pin4
var pin5
var pin6
var pin7
var pin8
var pin9
var pin10

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
    if (pin1 === true) {
      //pin1
      ctx.beginPath()
      ctx.moveTo(150,40)
      ctx.lineTo(180,80)
      ctx.lineTo(120,80)
      ctx.lineTo(150,40)
      ctx.stroke()
      ctx.fill()
      ctx.closePath()

    }
    if (pin2 === true) {
      //pin2
      ctx.beginPath()
      ctx.moveTo(215,40)
      ctx.lineTo(245,80)
      ctx.lineTo(185,80)
      ctx.lineTo(215,40)
      ctx.stroke()
      ctx.fill()
      ctx.closePath()
  }
  if (pin3 === true) {
    //pin3
    ctx.beginPath()
    ctx.moveTo(280,40)
    ctx.lineTo(310,80)
    ctx.lineTo(250,80)
    ctx.lineTo(280,40)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  }

  if (pin4 === true) {
    //pin4
    ctx.beginPath()
    ctx.moveTo(345,40)
    ctx.lineTo(375,80)
    ctx.lineTo(315,80)
    ctx.lineTo(345,40)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  }

  if (pin5 === true) {
    //pin5
    ctx.beginPath()
    ctx.moveTo(180,85)
    ctx.lineTo(210,125)
    ctx.lineTo(150,125)
    ctx.lineTo(180,85)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()

  }
  if (pin6 === true) {
    //pin6
    ctx.beginPath()
    ctx.moveTo(245,85)
    ctx.lineTo(275,125)
    ctx.lineTo(215,125)
    ctx.lineTo(245,85)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()

  }
  if (pin7 === true) {
    //pin7
    ctx.beginPath()
    ctx.moveTo(310,85)
    ctx.lineTo(340,125)
    ctx.lineTo(280,125)
    ctx.lineTo(310,85)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()

  }
  if (pin8 === true) {
    //pin8
    ctx.beginPath()
    ctx.moveTo(210,130)
    ctx.lineTo(240,170)
    ctx.lineTo(180,170)
    ctx.lineTo(210,130)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()

  }
  if(pin9 === true){
    //pin9
    ctx.beginPath()
    ctx.moveTo(275,130)
    ctx.lineTo(305,170)
    ctx.lineTo(245,170)
    ctx.lineTo(275,130)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()

  }
  if(pin10 === true){

    //pin10
    ctx.beginPath()
    ctx.moveTo(245,175)
    ctx.lineTo(275,215)
    ctx.lineTo(215,215)
    ctx.lineTo(245,175)
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  }
}

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPins()
    drawBall()
    if(rightPressed && (x < canvas.width-radius)){
      x += 3
    }else if (leftPressed && (x > radius)) {
      x -= 3
    }else if (upPressed) {
      while(y > 215){
        y += dy
      }
    }

}
  document.addEventListener('keydown', keyDownHandler, false)
  document.addEventListener('keyup', keyUpHandler, false)

  setInterval(draw, 10)
  //para dibujar en intervalos de 10 segundos
  //draw()

  function keyDownHandler(e){
    if(e.keyCode == 39){
      rightPressed = true
      }
    else if (e.keyCode == 37) {
      leftPressed = true
    }else if (e.keyCode == 38) {
      upPressed = true
    }

  }

  function keyUpHandler(e){
    if(e.keyCode == 39){
      rightPressed = false
    }else if (e.keyCode == 37) {
      leftPressed = false
    }else if (e.keyCode == 38) {
      upPressed = false
    }
  }
