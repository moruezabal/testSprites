const character = document.getElementById('character');
const game = document.getElementById('game'); //Background
const body = document.getElementById("body");

let currentCharacter = "female";

const sprites = {

    "male" : {
        idle : {
            width : '1061px',
            path : 'sprites/male/idle.png'
        },
        running : {
            width : '1587px',
            path : 'sprites/male/running.png'
        }

    },

    "female" : {
        idle : {
            width : '1163px',
            path : 'sprites/female/idle.png'
        },
        running : {
            width : '1448px',
            path : 'sprites/female/running.png'
        },
        jumpAttack: {
            width : '1699px',
            path : 'sprites/female/jump-attack.png'
        },
        jump: {
            width : '1472px',
            path : 'sprites/female/jump.png'
        }
    }
}

body.addEventListener('keyup', (event) =>{
        let key = event.key;
      
        if (key == " ") {
            startGame(); // Empieza a correr si apretas la barra espaciadora
        }
    
})

function startGame(){
    game.classList.remove('backgroundStatic')
    character.classList.remove('idle');

    document.documentElement.style.setProperty('--sprite-width', sprites[currentCharacter].running.width);
    game.classList.add('backgroundDinamic');
    character.classList.add('run');
}