

// const readlineSync = require('readline-sync');

// function guessingGame() {
// let lower = 0;
// let upper = 10;



// while (lower <= upper) {
//     const middle = lower + Math.floor((upper - lower ) / 2);
//     input = readlineSync.question('is the number ' + middle + '?' + ' type yes/higher/lower ');
//     console.log('attempts: ', input);

//     if (input === 'yes') { 
//         console.log('winner winner it was number ' );
//         return middle;
//     } else if (input === 'lower') { 
//         console.log('your guess was too high ' );
//         upper = middle - 1;

//     } else if (input === 'higher') {
//         console.log('your guess was too low ' );
//             lower = middle + 1;
//     };
// }
//     return "bro... you are a liar!"
// }
// console.log(guessingGame());


const readlineSync = require('readline-sync');
let counter = 1;
const maximumAttempts = 5;
const random = Math.floor((Math.random() * 10) + 1);


 function randomInteger() {
     return random; // this line is getting random number from 1-100
    }

while (counter != maximumAttempts) {
    
        input = readlineSync.question('Guess a number between 1-10, you only have 5 attempts so guess carefully: ');
        counter ++; 

     if (input < random) {
         console.log('Your guess was too low ' + input);
     }
     else if (input > random ) {
        console.log('Your guess was too high ' + input);
     }
     
     else if(input == random) {
         console.log('WINNER WINNER CHICKEN DINNER! The winning number was ', input);
         break;
     }
    }

    
     console.log(randomInteger());
