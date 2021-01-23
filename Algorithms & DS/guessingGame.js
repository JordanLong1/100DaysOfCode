

const readlineSync = require('readline-sync');

function guessingGame() {
let lower = 0;
let upper = 10;



while (lower <= upper) {
    const middle = lower + Math.floor((upper - lower ) / 2);
    input = readlineSync.question('is the number ' + middle + '?' + ' type yes/higher/lower ');
    console.log('attempts: ', input);

    if (input === 'yes') { 
        console.log('winner winner it was number ' );
        return middle;
    } else if (input === 'lower') { 
        console.log('your guess was too high ' );
        upper = middle - 1;

    } else if (input === 'higher') {
        console.log('your guess was too low ' );
            lower = middle + 1;
    };
}
    return "bro... you are a liar!"
}
console.log(guessingGame());
