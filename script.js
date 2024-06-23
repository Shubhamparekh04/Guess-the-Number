'use strict';

//for printing message
const setMessage = function (message){
    document.querySelector('.message').textContent = message;
}

//for setting score
const setScore = function (score){
    document.querySelector('.score').textContent = score;
}

let randomNumber = Math.trunc((Math.random() * 20) + 1)

let score = 20;
setScore(score);

let highScore = 0;
document.querySelector('.highscore').textContent = highScore;


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    setScore(score);
    
    randomNumber = Math.trunc((Math.random() * 20) + 1);
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    setMessage('Start guessing...');
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        setMessage('⛔ No Number !');
    } else if (guess !== randomNumber) {

        if (score > 1) {
            score--;
            setScore(score);
            setMessage(guess > randomNumber ? '📈 Too High !' : '📉 Too Low !');
        } else {
            setMessage('💥 You Lost the Game !');
            setScore(0);
        }
    } else if (guess === randomNumber) {
        setMessage('🎉 Correct Number !');
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
});



