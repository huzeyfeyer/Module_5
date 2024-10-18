import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let number = parseFloat( await userInput.question('Geef een getal in: '))

if(number <= 0){
    console.error('Het getal moet groter zijn dan 0!')
}else{
    let {sum , line } = divisors(number)
    console.log(line + ' = ' + sum )
}

function divisors(number){
    let line = ''
    let sum = 0
    for(let i = 1 ; i < number ; i++){
        if(number % i === 0){
            line += i + ' + '
            sum += i
        }
    }

    if( line.length > 0){
        line = line.slice(0 , -3)
    }
    return { sum , line }
    
}

process.exit()