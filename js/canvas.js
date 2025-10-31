document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('GameCanvas');
    const ctx = canvas.getContext('2d');
    const bg = new Image();
    bg.src = './img/aquarium1.jpg';
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
});
