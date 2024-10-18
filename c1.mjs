

// Random Getal Functie

function randomGetal(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Schrikkeljaar Functie

function isSchrikkeljaar(jaar) {
    return (jaar % 4 === 0 && jaar % 100 !== 0) || (jaar % 400 === 0);
}

// Dagen in Maand Functie

function dagenInMaand(maand, jaar) {
    const dagenPerMaand = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (maand === 2 && isSchrikkeljaar(jaar)) {
        return 29;
    } else {
        return dagenPerMaand[maand - 1];
    }
}

// Factorial Functie

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Perfecte Getallen Functie

function isPerfectGetal(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

// Som van Delers Functie

function somVanDelers(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
}

// Oppervlakte Berekeningen

function oppervlakteCirkel(radius) {
    return Math.PI * radius * radius;
}

function oppervlakteRechthoek(zijde1, zijde2) {
    return zijde1 * zijde2;
}

function oppervlakteVierkant(zijde) {
    
    return oppervlakteRechthoek(zijde, zijde);
}

function oppervlakteDriehoek(basis, hoogte) {
    return (basis * hoogte) / 2;
}

// Temperatuurconversie Functie

function converteerTemperatuur(temp, isCelcius = true) {
    if (isCelcius) {
        return (temp * 1.8) + 32; // Celsius naar Fahrenheit
    } else {
        return (temp - 32) / 1.8; // Fahrenheit naar Celsius
    }
}

// Getal Raden Spel Functie

function raadGetalSpel(min = 1, max = 10) {
    const target = randomGetal(min, max);
    let pogingen = 0;
    let number;
    do {
        number = parseFloat(prompt(`Raad een getal tussen ${min} en ${max}:`));
        pogingen++;
        if (number > target) {
            console.log('Gaat lager');
        } else if (number < target) {
            console.log('Gaat hoger');
        } else {
            console.log(`Jij wint! Je hebt het geraden in ${pogingen} pogingen.`);
        }
    } while (number !== target);
}