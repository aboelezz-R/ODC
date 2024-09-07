
var container = document.querySelector('body');
var containerSize = container.getBoundingClientRect();
var chickens = document.getElementById('chickens');
var rocket = document.getElementById('rocket');

for(var i = 0; i <= 55; i++){
    var chick = document.createElement('img');
    chickens.append(chick);
    chick.classList.add('chick');
    chick.src = "./assets/Chicken.png";
}

var positionY = 0;
var positionX = 0;
var move = window.addEventListener('keydown', function(e){
    var step = 10;
    if(e.code === 'ArrowUp'){
        positionY += step;
        rocket.style.bottom = positionY + 'px';

        // if(positionY >= containerSize.height - 150){
        //     positionY = containerSize.height - 150 + 'px';
        // }
    }
    else if(e.code === 'ArrowDown'){
        positionY -= step;
        rocket.style.bottom = positionY + 'px';

        if(positionY <= 0){
            positionY = 0;
        }
    }
    else if(e.code === 'ArrowRight'){
        positionX += step;
        rocket.style.left = positionX + 'px';

        if(positionX >= containerSize.width - 150){
            positionX = containerSize.width - 150 + 'px';
        }
    }
    else if(e.code === 'ArrowLeft'){
        positionX -= step;
        rocket.style.left = positionX + 'px';

        if(positionX <= 0){
            positionX = 0;
        }
    }

    if(e.code === 'Space'){
        var bullet = document.createElement('img');
        bullet.src = "./assets/Bullet.png";
        bullet.classList.add('bullet');
        rocket.append(bullet);

        var bulletPosition = 0;

        var bulletInterval = setInterval(function(){
            bulletPosition += step;
            bullet.style.bottom = bulletPosition + 'px';

            if(bulletPosition > 1000){
                clearInterval(bulletInterval);
                rocket.removeChild(bullet); 
            }
        },10);
    }
});