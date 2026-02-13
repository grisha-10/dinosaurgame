let dino = document.querySelector('.dino');
let cactus = document.querySelector('.cactus');
let pScore = document.querySelector('.p-score');
let pBest = document.querySelector('.p-best');

function jump() {
    dino.classList.add('jump-class');
    setTimeout(() => {
        dino.classList.remove('jump-class')
    }, 800);
}
let game = document.querySelector('.game');
game.onclick = function () {
    jump();
}




let t = 0;
let time = 0;
let record = 0;
if (localStorage.getItem('dino') != null){
    record = localStorage.getItem('dino')
    pBest.innerHTML = record;
}
function finish(){
    let left = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    let top = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))

    t++;
    if (t % 50 == 0){
        time++;
    }
    pScore.innerHTML = 'Рахунок: ' + time;
    
    if (left > 100 && left < 130 && top > 115 ) {
        alert('finish');
        t = 0;
        if(time > record){
            record = time;
            pBest.innerHTML ='Рекорд:'+ record;
            localStorage.setItem('dino', record)
        }
        time = 0;
    }
}
setInterval(() => {
    finish();
}, 10);
