import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let number = parseFloat( await userInput.question(' Geef een getal in: '))

if(number < 1){
    console.error("Het getal moet groter zijn dan 0")
}else{
    console.log(`De factoriële van ${number} is: ` , factorialcalculator(number))
   
}

function factorialcalculator(number){
    let result = 1
    for( let i = 1 ; i <= number ; i++){
        result *= i
    }

    return result
}



process.exit()