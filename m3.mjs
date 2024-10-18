import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function random(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let target = random()
let number
let lives = 3

do {

number = parseFloat( await userInput.question('Raad een getal tussen 1 en 10: '))

if(number < 1 || number > 10){
    console.error('Raad een getal tussen 1 en 10: ')
}else if( number > target ) {
    console.log(' Gaat lager')
    lives--
}else if( number < target ) {
    console.log(' Gaat hoger')
    lives--
}else{
    console.log('Jij wint!')
}

if (lives === 0){
    console.log('Game Over! Het juiste getal was: ' + target);
    break
}

}while( number !== target )

process.exit()



