import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let jaar = parseFloat(await userInput.question('Geef een jaar in: '));
let month = await userInput.question('welke maand wil je leren? ');

function dagenInDeMaand( month , jaar ){

switch(month){
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        console.log('Er zijn 31 dagen ' + month + ' in ' + jaar)
        break
    case 'februari':
        if(jaar % 4 == 0 || jaar % 400 == 0 ){
            console.log('Er zijn 29 dagen ' + month + ' in ' + jaar)
        }
        else{
        console.log('Er zijn 28 dagen ' + month + ' in ' + jaar)
        }
        break
  
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        console.log('Er zijn 30 dagen ' + month + ' in ' + jaar)
        break

    default:
        console.log('Vul een geldig maand in. ')
}

}

dagenInDeMaand(month , jaar)
process.exit()