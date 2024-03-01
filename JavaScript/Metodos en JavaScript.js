//!ejemplo 1
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(numero => numero * 2);

// Explicación 
//map crea una nueva lista "dobles" a partir de "numeros". 
//La función dentro de map toma cada número de la lista original ("numero") y lo multiplica por 2, creando un nuevo valor para la lista "dobles".

//!ejemplo 2
const estudiantes = [{nombre: "Ana", nota: 19}, {nombre: "Juan", nota: 15}, {nombre: "Pedro", nota: 20}];
const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.nota > 18);

// Explicación 
//filter crea una nueva lista "estudiantesAprobados" a partir de "estudiantes". 
//La función dentro de filter toma cada estudiante de la lista original ("estudiante") y verifica si su calificación ("nota") es mayor a 18.
// Si es así, el estudiante se agrega a la nueva lista.

//!ejemplo 3
const nOmbres = ["Ana", "Juan", "Pedro"];
nombres.forEach(nombre => console.log(nombre));

// Explicación 
//forEach recorre la lista "nombres" y ejecuta la función para cada nombre. La función simplemente imprime el nombre en la consola.

//!ejemplo 4
const productos = [{nombre: "Producto 1", precio: 100}, {nombre: "Producto 2", precio: 50}, {nombre: "Producto 3", precio: 150}];
const productoBarato = productos.find(producto => producto.precio < 100);

// Explicación 
//find busca en la lista "productos" el primer producto que tenga un precio ("precio") menor a $100.
// Si lo encuentra, devuelve ese producto ("productoBarato").

//!ejemplo 5
const numero = [5, 2, 4, 1, 3];
numeros.sort();

// Explicación 
//sort ordena la lista "numeros" de menor a mayor.

//!ejemplo 6
const numer = [1, 2, 3, 4, 5];
const suma = numeros.reduce((a, b) => a + b);

// Explicación 
//reduce toma la lista "numeros" y la "reduce" a un solo valor ("suma").
// La función dentro de reduce toma dos números ("a" y "b") y los suma, acumulando el resultado en la variable "suma".

//!ejemplo 7
const nombrIs = ["Ana", "Juan", "Pedro"];
const hayAna = nombres.some(nombre => nombre === "Ana");

// Explicación 
//some verifica si la lista "nombres" contiene al menos un nombre que sea igual a "Ana". Si lo encuentra, devuelve `true` ("hayAna").


//!ejemplo 8
const estudiantIs = [{nombre: "Ana", nota: 19}, {nombre: "Juan", nota: 15}, {nombre: "Pedro", nota: 20}];
const todosAprobados = estudiantes.every(estudiante => estudiante.nota > 18);

// Explicación 
//every verifica si todos los estudiantes en la lista "estudiantes" tienen una calificación ("nota") mayor a 18. 
//Si todos cumplen con la condición, devuelve `true` ("todosAprobados").


//!ejemplo 9
const colores = ["rojo", "verde", "azul"];
const contieneAzul = colores.includes("azul");

// Explicación 
//includes verifica si la lista "colores" contiene el valor "azul". 
//Si lo encuentra, devuelve `true` ("contieneAzul").


//!ejemplo 10
const nombrs = ["Ana", "Juan", "Pedro", "Ana"];
const indiceAna = nombres.indexOf("Ana");

// Explicación 
//indexOf busca la primera aparición de "Ana" en la lista "nombres" y devuelve su índice ("indiceAna").



//!ejemplo 11
const nombrws = ["Ana", "Juan", "Pedro", "Ana"];
const ultimoIndiceAna = nombres.lastIndexOf("Ana");

// Explicación 
//lastIndexOf busca la última aparición de "Ana" en la lista "nombres" y devuelve su índice ("ultimoIndiceAna").


//!ejemplo 12
const nmeros = [1, 2, 3, 4, 5];
const cadenaNumeros = numeros.join(", ");

// Explicación 
//join une los elementos de la lista "numeros" en una sola cadena ("cadenaNumeros"), separando cada número por una coma y un espacio.


//!ejemplo 13
const nombes = ["Ana", "Juan", "Pedro", "María"];
const subLista = nombres.slice(1, 3);

// Explicación 
//slice crea una nueva lista "subLista" a partir de la lista "nombres". 


//!ejemplo 14
const nombres = ["Ana", "Juan", "Pedro"];
nombres.splice(1, 1, "María");

// Explicación 
//splice modifica la lista "nombres" directamente. 
//La función indica que se debe eliminar un elemento a partir del índice 1 (incluido), y que se debe insertar el nombre "María" en su lugar.


//!ejemplo 15
const nueros = [1, 2, 3];
numeros.push(4);

// Explicación 
//push agrega el número 4 al final de la lista "numeros".


//!ejemplo 16
const ombres = ["Ana", "Juan", "Pedro"];
const ultimoNombre = nombres.pop();

// Explicación 
//pop elimina el último nombre de la lista "nombres" y lo guarda en la variable "ultimoNombre".


//!ejemplo 17
const Nombres = ["Juan", "Pedro"];
nombres.unshift("Ana");

// Explicación 
//unshift agrega el nombre "Ana" al inicio de la lista "nombres".


//!ejemplo 18
const nombrE = ["Ana", "Juan", "Pedro"];
const primerNombre = nombres.shift();

// Explicación 
//shift elimina el primer nombre de la lista "nombres" y lo guarda en la variable "primerNombre".


//!ejemplo 19
const nuMeros = [1, 2, 3, 4, 5];
numeros.reverse();

// Explicación 
//reverse invierte el orden de la lista "numeros".


//!ejemplo 20
const nombres1 = ["Ana", "Juan"];
const nombres2 = ["Pedro", "María"];
const todosNombres = nombres1.concat(nombres2);

// Explicación 
//concat crea una nueva lista "todosNombres" que contiene los nombres de las dos listas originales ("nombres1" y "nombres2").


//!ejemplo 21
const listaVacia = new Array(10);
listaVacia.fill(0);

// Explicación 
//fill crea una nueva lista "listaVacia" de 10 elementos y la rellena con el valor "0".


//!ejemplo 22
const nomBres = ["Ana", "Juan", "Pedro", "María"];
nombres.copyWithin(1, 3);

// Explicación 
//copyWithin copia la sección de la lista "nombres" desde el índice 3 (incluido) hasta el final, y la inserta en el índice 1 (reemplazando los elementos existentes). La lista final será: ["Ana", "María", "María", "Pedro"].



//!ejemplo 23
const Productos = [{nombre: "Producto 1", precio: 100}, {nombre: "Producto 2", precio: 50}, {nombre: "Producto 3", precio: 150}];
const indiceProductoBarato = productos.findIndex(producto => producto.precio < 100);

// Explicación 
//findIndex busca en la lista "productos" el primer producto que tenga un precio ("precio") menor a $100. Si lo encuentra, devuelve su índice ("indiceProductoBarato").


//!ejemplo 24
const nombRes = ["Ana", "Juan", "Pedro"];
const clavesNombres = nombres.keys();

for (const clave of clavesNombres) {
  console.log(clave); // 0, 1, 2
}

// Explicación 
//keys crea un objeto iterable "clavesNombres" que contiene las claves (índices) de la lista "nombres". El bucle `for` recorre las claves y las imprime en la consola.


//!ejemplo 25
const noMbres = ["Ana", "Juan", "Pedro"];
const valoresNombres = nombres.values();

for (const valor of valoresNombres) {
  console.log(valor); // "Ana", "Juan", "Pedro"
}

// Explicación 
//values crea un objeto iterable "valoresNombres" que contiene los valores de la lista "nombres". El bucle `for` recorre los valores y los imprime en la consola.

