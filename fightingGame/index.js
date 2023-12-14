const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
// console.log("shdbvh")

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 2;

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/background.png',
    // scale: 1.5,
})

const shop = new Sprite({
    position: {
        x: 650,
        y: 257
    },
    imageSrc: './img/shop.png',
    scale: 1.75,
    framesMax: 6
})




//create player

const player = new Fighter({
    //position xac dinh vi tri
    position: {
        x: 200,
        y: 0
    },
    //velocity xac dinh van toc
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },

    //animate khi move
    imageSrc: './img/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 0,
        y: 157
    },
    sprites: {
        idle: {
            imageSrc: './img/samuraiMack/Idle.png',
            framesMax: 8,
        },
        run: {
            imageSrc: './img/samuraiMack/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/samuraiMack/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/samuraiMack/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/samuraiMack/Attack1.png',
            framesMax: 6,
        },
        takeHit: {
            imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
            framesMax: 4,
        },
        death: {
            imageSrc: './img/samuraiMack/Death.png',
            framesMax: 6,
        },
        // attack2:{
        //     imageSrc: './img/samuraiMack/Attack2.png',
        //     framesMax: 6,
        // },
    },
    attackBox: {
        offset: {
            x: 100,
            y: 40
        },
        width: 140,
        height: 50
    }
})

//create enemy

const enemy = new Fighter({
    position: {
        x: 600,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    // color: 'green',
    offset: {
        x: 0,
        y: 0
    },

    //animate khi move
    imageSrc: './img/kenji/Idle.png',
    framesMax: 4,
    scale: 2.5,
    offset: {
        x: 0,
        y: 165
    },
    sprites: {
        idle: {
            imageSrc: './img/kenji/Idle.png',
            framesMax: 4,
        },
        run: {
            imageSrc: './img/kenji/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/kenji/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/kenji/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/kenji/Attack1.png',
            framesMax: 4,
        },
        takeHit: {
            imageSrc: './img/kenji/Take hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/kenji/Death.png',
            framesMax: 7,
        },
        // attack2:{
        //     imageSrc: './img/kenji/Attack2.png',
        //     framesMax: 6,
        // },
    },
    attackBox: {
        offset: {
            x: -160,
            y: 40
        },
        width: 150,
        height: 50
    }
})

// player.draw();

// enamy.draw();

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },


    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },

}




decreaseTimer();


function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    c.fillStyle = 'rgba(255,255,255,0.1)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    shop.update();
    player.update();
    enemy.update();
    // console.log("go");

    player.velocity.x = 0
    enemy.velocity.x = 0

    //move player

    if (keys.a.pressed && player.lastKey === 'a') {
        player.velocity.x = -10
        player.switchSprite('run')
    } else if (keys.d.pressed && player.lastKey === 'd') {
        player.velocity.x = 10
        player.switchSprite('run')
    } else {
        player.switchSprite('idle')
    }
    // juming
    if (player.velocity.y < 0) {
        player.switchSprite('jump')
    } else if (player.velocity.y > 0) {
        player.switchSprite('fall')
    }



    //move enemy

    if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 10
        enemy.switchSprite('run')
    } else if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -10
        enemy.switchSprite('run')
    } else {
        enemy.switchSprite('idle')
    }
    //juming
    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
    } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall')
    }

    //detect for collision player and take hit
    if (rectangleCollision({
        rectangle1: player,
        rectangle2: enemy
    }) && player.isattacking && player.framesCurrent === 4
    ) {
        enemy.takeHit()
        player.isattacking = false
        // document.querySelector('#enemyHealth').style.width = enemy.health + '%';
        gsap.to('#enemyHealth', {
            width: enemy.health + '%'
        })
    }

    // if player misses
    if (player.isattacking && player.framesCurrent === 4) {
        player.isattacking = false
    }

    //detect for collision enemy
    if (rectangleCollision({
        rectangle1: enemy,
        rectangle2: player
    }) && enemy.isattacking && enemy.framesCurrent === 2
    ) {
        player.takeHit()
        enemy.isattacking = false
        // document.querySelector('#playerHealth').style.width = player.health + '%';
        gsap.to('#playerHealth', {
            width: player.health + '%'
        })
    }

    // if enemy misses
    if (enemy.isattacking && enemy.framesCurrent === 2) {
        enemy.isattacking = false
    }

    // end game based on health

    if (enemy.health <= 0 || player.health <= 0) {
        determineWinner({ player, enemy, timerId })
    }
}

animate();

window.addEventListener('keydown', (event) => {
    if (!player.dead) {
        switch (event.key) {
            case 'd':
                keys.d.pressed = true
                player.lastKey = 'd'
                break;
            case 'a':
                keys.a.pressed = true
                player.lastKey = 'a'
                break;
            case 'w':
                player.velocity.y = -20
                keys.w.pressed = true
                player.lastKey = 'w'
                break;
            case 's':
                player.attack()
                break;
        }
    }

    if (!enemy.dead) {
        switch (event.key) {
            case 'ArrowRight':
                keys.ArrowRight.pressed = true
                enemy.lastKey = 'ArrowRight'
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true
                enemy.lastKey = 'ArrowLeft'
                break;
            case 'ArrowUp':
                player.velocity.y = -20
                keys.ArrowUp.pressed = true
                enemy.lastKey = 'ArrowUp'
                break;
            case 'ArrowDown':
                enemy.attack()
                break;
        }
    }

    console.log(event.key)
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break;
        case 'a':
            keys.a.pressed = false
            break;
        case 'w':
            keys.w.pressed = false
            break;


        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break;
    }

    console.log(event.key)
})

// console.log("player");