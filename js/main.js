
/*
    Programma per mostrare numeri da 1 a 100 in cui 
        se i è divisibile per 3 mostra "Fizz" 
        se i è divisibile per 5 mostra "Buzz" 
        se i è divisibile per entrambi mostra "FizzBuzz"
*/

const containerDom = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {

    if (i % (3 * 5) == 0) {

        /* //Se divisibile per 3*5 mostra FizzBuzz con inner.HTML
        const squareDom = `<div class="square">FizzBuzz</div>`;
        containerDom.innerHTML += squareDom; */

        ////Se divisibile per 3*5 mostra FizzBuzz con creazione dinamica elementi
        const squareDom = document.createElement("div");
        squareDom.classList.add("square");
        squareDom.append("FizzBuzz");
        containerDom.append(squareDom);



    } else if (i % 5 == 0) {

        /* //Se divisibile per 5 mostra Buzz con inner.HTML
        const squareDom = `<div class="square">Buzz</div>`;
        containerDom.innerHTML += squareDom; */

        //Se divisibile per 5 mostra Buzz con creazione dinamica elementi
        const squareDom = document.createElement("div");
        squareDom.classList.add("square");
        squareDom.append("Buzz");
        containerDom.append(squareDom);

    } else if (i % 3 == 0) {

        /* //Se divisibile per 3 mostra Fizz con inner.HTML
        const squareDom = `<div class="square">Fizz</div>`;
        containerDom.innerHTML += squareDom; */

        //Se divisibile per 3 mostra Fizz con creazione dinamica elementi
        const squareDom = document.createElement("div");
        squareDom.classList.add("square");
        squareDom.append("Fizz");
        containerDom.append(squareDom);

    } else {

        /* //Altrimenti mostra i con inner.HTML
        const squareDom = `<div class="square">${i}</div>`;
        containerDom.innerHTML += squareDom; */

        //Altrimenti mostra i con creazione dinamica elementi
        const squareDom = document.createElement("div");
        squareDom.classList.add("square");
        squareDom.append(i);
        containerDom.append(squareDom);

    }    
}

