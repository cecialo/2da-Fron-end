let planets = [];
let astronauts = [];
// ASYNC GETTERS
async function getPlanetsData(){ // get -> Obtener (Convención)
    //1. Hacer la petición (GET)
    // URL : https://handlers.education.launchcode.org/static/planets.json
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    //2. Validar la respuesta
    if(!response.ok) throw Error(response.statusText); // Se detiene la ejecución
    //3. Extraer la informacion 
    const data = await response.json();
    //4. Devolver la información
    return data;
}

async function getAstronautsData(){ // get -> Obtener (Convención)
    //1. Hacer la petición (GET)
    // URL : https://handlers.education.launchcode.org/static/planets.json
    const response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    //2. Validar la respuesta
    if(!response.ok) throw Error(response.statusText); // Se detiene la ejecución
    //3. Extraer la informacion 
    const data = await response.json();
    //4. Devolver la información
    return data;
}


// MAIN

// const planets = getPlanetsData(); // -> Promesa  (no la data)

async function main(){
    // obtener informacion de planetas
    planets = await getPlanetsData();
    astronauts = await getAstronautsData();
    //procesar la información planetas
    console.log(planets);
    console.log(astronauts);
}

// Llamar funcion principal
main();