const addPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Calculando ${a} + ${b}`);

        setTimeout(() => {
            resolve(a + b)
        }, 3000);

    })
}


const divPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Calculando ${a} / ${b}`);

        if(b === 0) {
            reject(new Error("Error: división entre 0"));
        } else {
            setTimeout(() => {
                resolve(a / b)
            }, 3000);
        }    
    })
}

console.log("---- Antes de la promesa ----");

divPromise(10, 0)
    .then((result) =>{
        console.log(`El resultado es: ${result}`);
    })
    .catch((error) => {
        console.log(error.message);
    })
    

console.log("---- Después de la promesa ----");