// Función que siempre muestra True
function siempreTrue() {
    return true;
}

let mostrarFuncion = siempreTrue();

console.log(mostrarFuncion);

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function mostrarDespues() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hola, soy una Promesa');
        }, 5000);
    })
}

async function mostrarMensaje() {
    console.log('Asyn lanzado');
    const result = await mostrarDespues();
    console.log(result);
}

mostrarMensaje();

// Funcion generadora

function* generarIndex() {
    let index = 0;
    while(true) {
        index += 2;
        if(index === 10) {
            return
        }
        yield index;
    }
}

const gen = generarIndex();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);