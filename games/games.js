const canva_width = 160 * 3;
const canva_height = 144 * 3;

function snakeGameHandler() {
  deleteCanvas()
  const canva_div = document.getElementById('canva-section')
  const canvas = document.createElement('canvas');
  canvas.id = 'game-canvas';
  canva_div.appendChild(canvas);

  const scale = 20;
  const frame_rate = 100;
  let last_direction = null;
  let moviment = null
  let total = 1

  let food = {
    x_position: 120,
    y_position: 250,
  }

  let snake = {
    x_position: 1,
    y_position: 1,
    tail: []
  }

  canvas.width = canva_width + scale;
  canvas.height = canva_height + scale;
  const ctx = canvas.getContext('2d');

  function reset() {

    clearInterval(moviment);
    last_direction = null;
    total = 1
    snake = {
      x_position: 1,
      y_position: 1,
      tail: []
    }

    food = {
      x_position: 200,
      y_position: 200,
    }

    createCanvas();
    document.getElementById('variableValue').innerText = (total - 1);
  }

  function checkDirection(direction) {

    if (last_direction == `ArrowLeft` && direction == `ArrowRight`) {
      return false
    }

    if (last_direction == `ArrowRight` && direction == `ArrowLeft`) {
      return false
    }

    if (last_direction == `ArrowUp` && direction == `ArrowDown`) {
      return false
    }

    if (last_direction == `ArrowDown` && direction == `ArrowUp`) {
      return false
    }

    return true
  }

  function createFood() {

    const cols = (canva_width / scale)
    const rows = (canva_height / scale)

    const x = (Math.random() * (cols)).toFixed(0) * scale
    const y = (Math.random() * (rows)).toFixed(0) * scale

    food = {
      x_position: x,
      y_position: y,
    }
  }

  function touchFood() {
    if (snake.x_position * scale == food.x_position) {
      if (snake.y_position * scale == food.y_position) {
        total = total + 1
        createFood()

        document.getElementById('variableValue').innerText = ((total - 1) * 10);
      }
    }
  }

  function touchBody() {
    snake.tail.forEach((tail, index) => {
      if (index != 0) {
        if (tail.x_position == snake.tail[0].x_position) {
          if (tail.y_position == snake.tail[0].y_position) {
            reset()
          }
        }
      }
    });
  }

  function movement(direction) {
    if (!checkDirection(direction)) {
      return
    }
    clearInterval(moviment);

    moviment = setInterval(() => {
      switch (direction) {
        case 'ArrowUp':
          snake.y_position = snake.y_position - 1
          break;
        case 'ArrowRight':
          snake.x_position = snake.x_position + 1
          break;
        case 'ArrowDown':
          snake.y_position = snake.y_position + 1
          break;
        case 'ArrowLeft':
          snake.x_position = snake.x_position - 1
          break;
        default:
          break;
      }
      createCanvas();
      last_direction = direction
    }, frame_rate)

  }

  function createCanvas() {
    touchFood()
    touchBody()

    if (snake.x_position > (canva_width / scale) || snake.y_position > (canva_height / scale)) {
      reset()
    }

    if (snake.x_position < 0 || snake.y_position < 0) {
      reset()
    }

    if (total === snake.tail.length) {
      for (let index = 0; index < snake.tail.length - 1; index++) {
        snake.tail[index] = snake.tail[index + 1];
      }
    }
    snake.tail[total - 1] = {
      x_position: snake.x_position,
      y_position: snake.y_position
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    //snake
    ctx.fillStyle = "green";
    if (total > 0) {
      for (let index = 0; index < snake.tail.length; index++) {
        ctx.fillRect(snake.tail[index].x_position * scale, snake.tail[index].y_position * scale, scale - 1, scale - 1);
      }
    }

    ctx.fillStyle = "red";
    //food
    ctx.fillRect(food.x_position, food.y_position, scale, scale)

    if (food.x_position > (canva_width) | food.y_position > (canva_height)) {
      createFood()
    }


    ctx.closePath();
  }

  reset()

  document.addEventListener('keydown', function (event) {
    event.preventDefault();
    movement(event.key)
  })
}

function spaceInvadersGameHandler() {
  deleteCanvas()
  const canva_div = document.getElementById('canva-section')
  const canvas = document.createElement('canvas');
  canvas.id = 'game-canvas';
  canva_div.appendChild(canvas);

  const scale = 20
  const aliens_x_quantity = 20;
  const aliens_y_quantity = 3;

  const width_in_scale = (canva_width / scale)

  canvas.width = canva_width + scale;
  canvas.height = canva_height + scale;
  const ctx = canvas.getContext('2d');

  const space_ship_y_position = (canva_height / scale) - 1

  let aliens = []
  let bullets = []
  let space_ship = {
    x_position: 15,
    y_position: space_ship_y_position
  }

  function createCanvas() {


    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";

      moveAliens()
      moveBullets()

      ctx.beginPath();
      ctx.fillStyle = "red";

      ctx.fillRect(space_ship.x_position * scale, space_ship.y_position * scale, scale, scale);
      ctx.stroke();
    }, 500);

  }

  let direction = 1

  function moveBullets() {

    for (let i = 0; i < bullets.length; i++) {

      bullets[i].y_position = bullets[i].y_position - 1

    }

    for (let i = 0; i < bullets.length; i++) {
      ctx.beginPath();
      ctx.arc(bullets[i].x_position * scale, bullets[i].y_position * scale, scale / 2, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
    }
  }

  function moveAliens() {
    if (aliens[0].x_position == 1) {
      direction = 1
    } else if (aliens[0].x_position == 5) {
      direction = 0
      direction = 0
    }
    updateAliens()


    for (let i = 0; i < aliens.length; i++) {
      ctx.beginPath();
      ctx.arc(aliens[i].x_position * scale, aliens[i].y_position * scale, scale / 2, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
    }

  }

  function updateAliens() {
    if (direction) {
      for (let i = 0; i < aliens.length; i++) {
        aliens[i].x_position = aliens[i].x_position + 1
      }
    } else {
      for (let i = 0; i < aliens.length; i++) {
        aliens[i].x_position = aliens[i].x_position - 1
      }
    }
  }

  function createAliens() {

    for (let x = 1; x <= aliens_x_quantity; x++) {
      for (let y = 1; y <= aliens_y_quantity; y++) {
        aliens.push({
          x_position: x,
          y_position: y,
          destroyed: false
        })
      }
    }
    console.log('aqui aliens', aliens)

  }

  function shutHandler() {

    console.log("aqui bullets", bullets)

    bullets.push({
      x_position: space_ship.x_position,
      y_position: space_ship.y_position + 1,
    })
  }

  function keyboardInput(input) {
    if (input == 'z') {
      shutHandler()
    }
  }

  createAliens()
  createCanvas()

  document.addEventListener('keydown', function (event) {
    event.preventDefault();
    keyboardInput(event.key)
  })

}

function flappyBirdGamaHandler() {
  deleteCanvas()
  const canva_div = document.getElementById('canva-section')
  const canvas = document.createElement('canvas');
  canvas.id = 'game-canvas';
  canva_div.appendChild(canvas);

  canvas.width = canva_width;
  canvas.height = canva_height;
  const ctx = canvas.getContext('2d');
  var image = document.getElementById("myImage");
  const speed = 2
  let cont = 0;
  let total = 0;
  let bird_size= 10;

  let bird = {
    x_position: 30,
    y_position: 20
  }

  let pipe = {
    top: {
      x_position: canvas.width,
      y_position: 50,
    },
    bottom: {
      x_position: canvas.width,
      y_position: 150,
    }
  }

  function reset() {
    cont = 0
    total = 0
    document.getElementById('variableValue').innerText = total;


    bird = {
      x_position: 30,
      y_position: 20
    }

    pipe = {
      top: {
        x_position: canvas.width,
        y_position: 50,
      },
      bottom: {
        x_position: canvas.width,
        y_position: 150,
      }
    }
  }

  function movement(direction) {

    if (direction == 'z') {
      bird.y_position = bird.y_position - 20;
    }
  }

  function resetPipe() {

    const top_height = Math.floor(Math.random() * (50 - 400)) + 400;


    pipe = {
      top: {
        x_position: canvas.width,
        y_position: top_height,
      },
      bottom: {
        x_position: canvas.width,
        y_position: top_height + 100,
      }
    }

  }

  function birdFall() {
    bird.y_position = bird.y_position + speed + 2.5;
  }

  function pipeMovement() {
    pipe.top.x_position = pipe.top.x_position - (speed * 2);
    pipe.bottom.x_position = pipe.bottom.x_position - (speed * 2);
  }

  function createCanvas() {

    setInterval(() => {
      birdFall()
      pipeMovement()

      if (bird.y_position > canva_height) {
        reset()
      }

      if (bird.x_position > pipe.top.x_position) {
        if (bird.y_position < (pipe.top.y_position + 10)) {
          reset()
        }
        if (bird.y_position > (pipe.bottom.y_position + 10)) {
          reset()
        }
      }


      if (cont == 140) {
        cont = 0;
        resetPipe()
        document.getElementById('variableValue').innerText = (total = total + 10);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";

      if(cont % 5 == 0){
        bird_size = bird_size == 10 ? 20 : 10
      }

      //Bird
      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.drawImage(image, bird.x_position, bird.y_position, 25, 25)
      ctx.stroke();

      //Top Pipe
      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.fillRect(pipe.top.x_position, pipe.top.y_position, 50, -canvas.height);
      ctx.stroke();

      //Top bottom
      ctx.beginPath();
      ctx.fillRect(pipe.bottom.x_position, pipe.bottom.y_position, 50, canvas.height);
      ctx.stroke();

      cont++
    }, 50)
  }

  createCanvas()

  document.addEventListener('keydown', function (event) {
    event.preventDefault();
    movement(event.key)
  })
}

function deleteCanvas() {
  var canva_div = document.getElementById('canva-section');
  var canvas = document.getElementById('game-canvas');
  if (canvas) {
    canva_div.removeChild(canvas);
  }
}

const snakeGame = document.getElementById('snakeGame');
snakeGame.addEventListener('click', snakeGameHandler);

// const spaceInvadersGame = document.getElementById('spaceInvadersGame');
// spaceInvadersGame.addEventListener('click', spaceInvadersGameHandler);

const flappyBirdGame = document.getElementById('flappyBirdGame');
flappyBirdGame.addEventListener('click', flappyBirdGamaHandler);