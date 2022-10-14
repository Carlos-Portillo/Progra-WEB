
// Función de calculo
const calculate = (numbers = [], process) => {
    if(numbers.length === 0) return 0;

    let prev = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        prev = process(prev, numbers[i]); // Se le mandara un proceso con el ultimo numero y el siguiente, no se sabe que proceso
    }

    return prev;
}

const flatArray = (key = "add") => {
    let selectedProcess = () => 0;

    switch(key.toUpperCase()) {
        case "ADD":
            selectedProcess = (a, b) => a + b;
            break;
        case "SUB":
            selectedProcess = (a, b) => a - b;
            break;
        case "TIMES":
            selectedProcess = (a, b) => a * b;
            break;
        case "DIV":
            selectedProcess = (a, b) => b === 0 ? a: a / b;
            break;
    }

    return (numbers = []) => calculate(numbers, selectedProcess);

    /* return (numbers = []) => {
        const result;
        result = calculate(numbers, selectedProcess);
    } */
}

/* Main function */

const main = () => {
    const testNumbers = [3, 5, 8, 10, 5, 6, 2];

    /* const result = calculate(testNumbers);
    console.log(`Suma de elementos: ${result}`); */

    console.log("------ Callbacks ------\n");

    const addCallback = (a, b) => a + b;        //Haciendo el proceso como una variable
    const subCallback = (a, b) => a - b;        //Haciendo el proceso como una variable
    const timesCallback = (a, b) => a * b;      //Haciendo el proceso como una variable
    const divCallback = (a, b) => b === 0 ? a :  a / b;        //Si b es = 0 devuelvo a y si no la división

    console.log(`Suma de elementos: ${calculate(testNumbers, addCallback)}`);
    console.log(`Resta de elementos: ${calculate(testNumbers, subCallback)}`);
    console.log(`Producto de elementos: ${calculate(testNumbers, timesCallback)}`);
    console.log(`División de elementos: ${calculate(testNumbers, divCallback)}`);

    console.log(`Módulo de elementos: ${calculate(testNumbers, (a, b) => a % b)}`);

    console.log("\n------ Callbacks ------\n");
    console.log("\n------ Higher other functions ------\n");
    

    console.log(`Suma de elementos: ${flatArray("add")(testNumbers)}`);
    console.log(`Resta de elementos: ${flatArray("Sub")(testNumbers)}`);
    console.log(`Producto de elementos: ${flatArray("TiMes")(testNumbers)}`);
    console.log(`División de elementos: ${flatArray("dIv")(testNumbers)}`);

    console.log("\n------ Higher other functions ------\n");
}

main();