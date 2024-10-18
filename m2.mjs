import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function random(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let target = random()
let number

do {

number = parseFloat( await userInput.question('Raad een getal tussen 1 en 10: '))

if(number < 1 || number > 10){
    console.error('Raad een getal tussen 1 en 10: ')
}else if( number > target ) {
    console.log(' Gaat lager')
    
}else if( number < target ) {
    console.log(' Gaat hoger')
    
}else{
    console.log('Jij wint!')
}
}while( number !== target)

process.exit()



