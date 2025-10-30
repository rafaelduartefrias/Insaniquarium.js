const canvas = document.getElementById('GameCanvas');
const ctx = canvas.getContext('2d');

function game() {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

game();
