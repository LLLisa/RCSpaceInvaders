const oneone = document.getElementById('oneone');
const onetwo = document.getElementById('onetwo');
const onethree = document.getElementById('onethree');
const onefour = document.getElementById('onefour');
const onefive = document.getElementById('onefive');
const twoone = document.getElementById('twoone');
const twotwo = document.getElementById('twotwo');
const twothree = document.getElementById('twothree');
const twofour = document.getElementById('twofour');
const twofive = document.getElementById('twofive');
const youDied = document.getElementById('youdied');

const invaders = [
  oneone,
  onetwo,
  onethree,
  onefour,
  onefive,
  twoone,
  twotwo,
  twothree,
  twofour,
  twofive,
];

//invaders------------------------------

let currentX = 0,
  currentY = 0;
currentTimeout = 0;

const frameDelay = 500;
const framesPerTraversal = 12;
const timeoutInterval = frameDelay * framesPerTraversal;

const positions = (array, x = 0, y = 0) => {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.add('invader');
    array[i].style.position = 'absolute';
    array[i].style.left = i < 5 ? `${y + i * 15}%` : `${y + (i - 5) * 15}%`;
    array[i].style.top = i < 5 ? `${x}%` : `${x + 8}%`;
  }
};

const moveRight = (x = 0, y = 0) => {
  for (let i = 0; i < framesPerTraversal; i++) {
    setTimeout(() => {
      positions(invaders, x, y);
      currentY = y;
      y += 3;
    }, i * frameDelay);
  }
};

const moveDown = (x = 0, y = 0) => {
  x += 10;
  positions(invaders, x, y);
  currentX = x;
};

const moveLeft = (x = 0, y = 0) => {
  for (let i = 0; i < framesPerTraversal; i++) {
    setTimeout(() => {
      positions(invaders, x, y);
      currentY = y;
      y -= 3;
    }, i * frameDelay);
  }
};

const animation = async (array) => {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      moveRight(currentX, currentY);
    }, currentTimeout);
    currentTimeout += timeoutInterval;
    setTimeout(() => {
      moveDown(currentX, currentY);
    }, currentTimeout);
    setTimeout(() => {
      moveLeft(currentX, currentY);
    }, currentTimeout);
    currentTimeout += timeoutInterval;
    setTimeout(() => {
      if (currentX > 69) {
        youDied.style.opacity = '100%';
      }
      moveDown(currentX, currentY);
    }, currentTimeout);
  }
};

positions(invaders);
animation();

//shooter------------------------------
const shooter = document.getElementById('shooter');
let shooterX = 45;
shooter.style.marginLeft = `${shooterX}%`;
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'ArrowLeft' && shooterX > 5) {
    shooterX -= 10;
    shooter.style.marginLeft = `${shooterX}%`;
  }
  if (ev.key === 'ArrowRight' && shooterX < 95) {
    shooterX += 10;
    shooter.style.marginLeft = `${shooterX}%`;
  }
});
