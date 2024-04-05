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

function anotherGameHandler() {
  deleteCanvas()
  const canva_div = document.getElementById('canva-section')
  const canvas = document.createElement('canvas');
  canvas.id = 'game-canvas';
  canva_div.appendChild(canvas);

  canvas.width = canva_width;
  canvas.height = canva_height;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  //snake
  ctx.fillStyle = "green";
  ctx.fillRect(20, 10, 5, 5);

  ctx.closePath();
}

function deleteCanvas() {
  var canva_div = document.getElementById('canva-section');
  var canvas = document.getElementById('game-canvas');
  if(canvas){
    canva_div.removeChild(canvas);
  }
}


var button = document.getElementById('snakeGame');
button.addEventListener('click', snakeGameHandler);

var button = document.getElementById('anotherGame');
button.addEventListener('click', anotherGameHandler);