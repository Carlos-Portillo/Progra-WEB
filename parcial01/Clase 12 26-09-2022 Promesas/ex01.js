const promiseFunc = () => {
    return new Promise((resolve, reject) => { /* Resolve y reject establece el momento si la promesa se cumple o no */

    // Procesos largos
    setTimeout(() => {
        console.log("---- No me mintieron ----")

        setTimeout(() => {
            resolve();
        }, 1000)
        
    }, 3000)

    });
}

console.log("---- Antes de la promesa ----");

promiseFunc()
    .then(() => {
        console.log("---- El cap 133 es real ----");
    });

console.log("---- Después de la promesa ----");