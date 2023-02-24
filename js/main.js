
/*
    Programma per mostrare numeri da 1 a 100 in cui 
        se i è divisibile per 3 mostra "Fizz" 
        se i è divisibile per 5 mostra "Buzz" 
        se i è divisibile per entrambi mostra "FizzBuzz"
*/

for (let i = 1; i <= 100; i++) {
    if (i % (3 * 5) == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }    
}

