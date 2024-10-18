import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let line = ''


for(let i = 1 ; i <= 100 ; i++){
    let sum = 0

    for( let j = 1 ; j < i ; j++){
        if(i % j === 0){
            sum += j

        }
       
    }

    if(sum === i){
        line += i + ', '
    }
}

if(line.length > 0){
    line = line.slice(0 , -2)
}

line += ' .'

console.log('De perfecte getallen tussen 1 en 100 zijn ' + line)

process.exit()