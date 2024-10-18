import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let temperature = parseFloat( await userInput.question(' Geef  de temperatuur in: '))
let isCelcius = await userInput.question(' Is het Celcius: `True/False` ')

console.log(temperature)
console.log(temperatureCalculater(temperature, isCelcius))


function temperatureCalculater( temperature , isCelcius){

    if(isCelcius.toLowerCase() === 'true'){      
            return (temperature * 1.8) + 32      
    }else{       
            return (temperature - 32) / 1.8    
    }
}

process.exit()


