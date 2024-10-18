import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let radius = parseFloat( await userInput.question(' Geef  de straal in voor circle: '))
let base = parseFloat( await userInput.question(' Geef  de basis in voor drihoek: '))
let height = parseFloat( await userInput.question(' Geef  de hoogte in voor driehoek: '))

console.log('Deze parameters worden gebruikt in vierkant en rechthoek! ')

let results = surfaces(radius , base , height)
console.log(results)

function surfaces( radius , base , height ){

    let circle = radius * radius * Math.PI
    let triangle = base * height / 2
    let rectangle = base * height
    let square = base * base
    
    return{
        circle : circle,
        triangle : triangle,
        rectangle : rectangle,
        square : square
    }


}




process.exit()



