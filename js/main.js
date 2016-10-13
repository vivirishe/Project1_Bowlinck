console.log('yup')

//First Step
//Filling information
var newPlayer = 0
//jQuery capturing Player's Name
$('#enterName').on('click', function(){
  newPlayer = $('#nameField').val()
  if($('#name').children().length > 1){
    $('#name').children().eq(1).html(newPlayer)
  }else {
    $('<h3 />', {html: newPlayer}).appendTo('#name')
    $('#nameField').val('')
  }
})

//jQuery selecting Level
//setting number of shootsLeft and setting score to 0
var selectLevel = 0
var shootsLeft = 0
var score = 0

//CHOOSING LEVEL
//If you click on level easy, it will set the number of shoots that you have which is 10 and it will set the velocity of the ball to slow
//It adds all the information to the score board to the right, once you already clicked on "startGame" it blocks the option to change the level with an alert
  $('#easy').on('click', function(){
    shootsLeft = 10
    velocity = 2
    selectLevel = $('#easy').text()
    if (startResetButton === "Start Game") {
        if(($('#level').children().length > 1) && ($('#shoots').children().length > 1) && ($('#score').children().length > 1)){
          $('#level').children().eq(1).html(selectLevel)
          $('#shoots').children().eq(1).html(shootsLeft)
          $('#score').children().eq(1).html(score)
        }else{
          $('<h3 />', {html: selectLevel}).appendTo('#level')
          $('<h3 />', {html: shootsLeft}).appendTo('#shoots')
          $('<h3 />', {html: score}).appendTo('#score')
      }
    }else {
      alert('You already chose a level')
    }
  })

  //If you click on level medium, it will set the number of shoots that you have which is 8 and it will set the velocity of the ball to regular
  //It adds all the information to the score board to the right, once you already clicked on "startGame" it blocks the option to change the level with an alert
  $('#medium').on('click', function(){
    shootsLeft = 8
    velocity = 4
    selectLevel = $('#medium').text()
    if (startResetButton === "Start Game") {
      if(($('#level').children().length > 1) && ($('#shoots').children().length > 1) && ($('#score').children().length > 1)){
        $('#level').children().eq(1).html(selectLevel)
        $('#shoots').children().eq(1).html(shootsLeft)
        $('#score').children().eq(1).html(score)
      }else{
        $('<h3 />', {html: selectLevel}).appendTo('#level')
        $('<h3>', {html: shootsLeft}).appendTo('#shoots')
        $('<h3>', {html: score}).appendTo('#score')
      }
    }else {
      alert('You already chose a level')
    }
  })

  //If you click on level advanced, it will set the number of shoots that you have which is 6 and it will set the velocity of the ball to fast
  //It adds all the information to the score board to the right, once you already clicked on "startGame" it blocks the option to change the level with an alert
  $('#advanced').on('click', function(){
    shootsLeft = 6
    velocity = 5
    selectLevel = $('#advanced').text()
    if (startResetButton === "Start Game") {
      if(($('#level').children().length > 1) && ($('#shoots').children().length > 1) && ($('#score').children().length > 1)){
        $('#level').children().eq(1).html(selectLevel)
        $('#shoots').children().eq(1).html(shootsLeft)
        $('#score').children().eq(1).html(score)
      }else{
        $('<h3 />', {html: selectLevel}).appendTo('#level')
        $('<h3>', {html: shootsLeft}).appendTo('#shoots')
        $('<h3>', {html: score}).appendTo('#score')
      }
    }else {
      alert('You already chose a level')
    }
  })

  //startGame button
  //Control of start or reset button
  var startResetButton = $('#startGame').text()

    $('#startGame').on('click', function(){
      if (startResetButton === "Start Game") {
        if (newPlayer == 0 || selectLevel == 0) {
          alert('You Must Enter your Name and Select a Level')
        }else{
          $('#startGame').text('Reset')
          startResetButton = $('#startGame').text()
          //variables for Pins
          reloadPins()
        }
      }else if(startResetButton === "Reset") {
        $('h3').eq(1).text('')
        $('h3').eq(2).text('')
        $('h3').eq(3).text('')
        $('#startGame').text('Start Game')
        startResetButton = $('#startGame').text()
        //reloadPins()
        x = 245
        y = 500
        upPressed = false
        leftPressed = false
        rightPressed = false
        score = 0
        velocity = 0
        alert('Enter your name and choose a Level')
      }
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

  //ball's initial position
  var x = 245
  var y = 500
  var radius = 25
//variable to define ball's velocity
  var velocity = 0
 //moving indicators (left and right)
  var rightPressed = false
  var leftPressed = false
  var upPressed = false
  var bowlingBall = true
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


  function reloadPins(){
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
    bowlingBall = true
  }

  //Ball
  function drawBall(){
    if (bowlingBall) {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0,2*Math.PI)
      ctx.fillStyle = 'blue'
      ctx.fill()
      ctx.stroke()
      ctx.closePath()
    }
  }

  function drawPins(){

    ctx.fillStyle = gradient
    if (pin1 === true) {
      //pin1
      ctx.beginPath()
      ctx.moveTo(150,40)
      ctx.lineTo(180,80)
      ctx.lineTo(120,80)
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
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
  }
}
  function winLogic(){
    if(pin1 == false && pin2 == false && pin3 == false && pin4 == false && pin5 == false && pin6 == false && pin7 == false && pin8 == false && pin9 == false && pin10 == false){
      alert(newPlayer + " you're a Bada$$, you killed all the pins, Congrats!! Your Score is: " + score)
      bowlingBall = false
    }else {
      score += 1
      $('h3').eq(3).text(score)
      shootsLeft -= 1
      if (shootsLeft > 0) {
        $('h3').eq(2).text(shootsLeft)
      }else{
        $('h3').eq(2).text(shootsLeft)
        x = 245
        y = 500
        upPressed = false
        alert('Game Over')
        alert(newPlayer + " your score is: " + score)
        bowlingBall = false
    }
    x = 245
    y = 500
    upPressed = false
  }
}
  function winIntersecLogic(){
    if(pin1 == false && pin2 == false && pin3 == false && pin4 == false && pin5 == false && pin6 == false && pin7 == false && pin8 == false && pin9 == false && pin10 == false){
      x = 245
      y = 500
      upPressed = false
      alert(newPlayer + " you're a Bada$$, you killed all the pins, Congrats!! Your Score is: " + score)
      bowlingBall = false
    }else {
      score += 2
      $('h3').eq(3).text(score)
      shootsLeft -= 1
      if (shootsLeft > 0) {
        $('h3').eq(2).text(shootsLeft)
      }else{
        $('h3').eq(2).text(shootsLeft)
        x = 245
        y = 500
        upPressed = false
        alert('Game Over')
        alert(newPlayer + " your score is: " + score)
        bowlingBall = false
    }
    x = 245
    y = 500
    upPressed = false
  }
}
  function hitPins(){
    if (y <= radius){
      winLogic()
    }
    if(pin8 && pin9 && (y-radius < 170) && (x+radius >= 235 && x-radius <= 250)){
      pin8 = false
      pin9 = false
      winIntersecLogic()
    }
    if(pin5 && pin6 && (y-radius < 125) && (x+radius >= 205 && x-radius <= 220)){
      pin5 = false
      pin6 = false
      winIntersecLogic()
    }
    if(pin6 && pin7 && (y-radius < 125) && (x+radius >= 270 && x-radius <= 285)){
      pin6 = false
      pin7 = false
      winIntersecLogic()
    }
    if(pin1 && pin2 && (y-radius < 80) && (x+radius >= 175 && x-radius <= 190)){
      pin1 = false
      pin2 = false
      winIntersecLogic()
    }
    if(pin2 && pin3 && (y-radius < 80) && (x+radius >= 240 && x-radius <= 255)){
      pin2 = false
      pin3 = false
      winIntersecLogic()
    }
    if(pin3 && pin4 && (y-radius < 80) && (x+radius >= 305 && x-radius <= 320)){
      pin3 = false
      pin4 = false
      winIntersecLogic()
    }
    if( pin10 && (y-radius < 215) && (x+radius >= 215 && x-radius <= 275)){
     pin10 = false
     winLogic()
    }
    if (pin9 && (y-radius < 170) && (x+radius >= 245 && x-radius <= 305)) {
      pin9 = false
      winLogic()
    }
    if (pin8 && (y-radius < 170) && (x+radius >= 180 && x-radius <= 240)) {
      pin8 = false
      winLogic()
    }
    if (pin7 && (y-radius < 125) && (x+radius >= 280 && x-radius <= 340)) {
      pin7 = false
      winLogic()
    }
    if (pin6 && (y-radius < 125) && (x+radius >= 215 && x-radius <= 275)) {
      pin6 = false
      winLogic()
    }
    if (pin5 && (y-radius < 125) && (x+radius >= 150 && x-radius <= 210)) {
      pin5 = false
      winLogic()
    }
    if (pin4 && (y-radius < 80) && (x+radius >= 315 && x-radius <= 375)) {
      pin4 = false
      winLogic()
    }
    if (pin3 && (y-radius < 80) && (x+radius >= 250 && x-radius <= 310)) {
      pin3 = false
      winLogic()
    }
    if (pin2 && (y-radius < 80) && (x+radius >= 185 && x-radius <= 245)) {
      pin2 = false
      winLogic()
    }
    if (pin1 && (y-radius < 80) && (x+radius >= 120 && x-radius <= 180)) {
      pin1 = false
      winLogic()
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
      }
      if (upPressed) {
        // setInterval(hitPins, 40)
        y -= velocity
        hitPins();
      }
}
  document.addEventListener('keydown', keyDownHandler, false)
  document.addEventListener('keyup', keyUpHandler, false)

//para dibujar en intervalos de 10 segundos
  setInterval(draw, 10)

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
    }
  }
