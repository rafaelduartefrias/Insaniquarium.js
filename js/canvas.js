document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('GameCanvas');
    const ctx = canvas.getContext('2d');
    const bg = new Image();
    const MenuBarIMG = new Image();
    bg.src = './img/aquarium1.jpg';
    MenuBarIMG.src = './img/menubar.gif';
    
    function DrawMenuBar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (bg.complete) {
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        }
        
        const menubarWidth = 640;
        const menubarHeight = 75;
        const x = (canvas.width - menubarWidth) / 2;
        const y = 20;
        if (MenuBarIMG.complete) {
           ctx.drawImage(MenuBarIMG, x, y, menubarWidth, menubarHeight);
        }
    }

    let bgLoaded = false;
    let menuLoaded = false;
    
    bg.onload = function() {
        bgLoaded = true;
        if (menuLoaded) DrawMenuBar();
    };
    
    MenuBarIMG.onload = function() {
        menuLoaded = true;
        if (bgLoaded) DrawMenuBar();
    };
});
