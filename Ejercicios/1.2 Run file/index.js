//Ejercicio 1
// comentario de una sola línea
//let nombre = "Josue"; 
//console.log("Hola, " + nombre);

//Ejercicio 2

//let nombre = "Javier"; 
//const edad = 25; 
//let esEstudiante = true; 

// Mostrar los valores por consola
//console.log("Nombre:", nombre); 
//console.log("Edad:", edad); 
//console.log("¿Es estudiante?", esEstudiante); 

//Ejercicio 3
//const miArray = [
  //42,                         
  //"Hola, mundo!",              
  //true,                        
  //{ nombre: "Javier", edad: 30 }, 
  //[1, 2, 3],                   
  //function() {                 
    //  console.log("Soy una función dentro de un array!");
  //}
//];
//console.log("Elemento 1 (Número):", miArray[0]);
//console.log("Elemento 2 (Cadena):", miArray[1]);
//console.log("Elemento 3 (Booleano):", miArray[2]);
//console.log("Elemento 4 (Objeto):", miArray[3]);
//console.log("Elemento 5 (Array):", miArray[4]);


//console.log("Elemento 6 (Función):");
//miArray[5]();
 
//Ejercicio 4
//function aplicarOperacion(num1, num2) {
  // suma
  //const resultado = num1 + num2;
  //return resultado;
//}

//uso de la función
//const numero1 = 6;
//const numero2 = 20;
//const resultadoOperacion = aplicarOperacion(numero1, numero2);
//console.log(`El resultado de la operación es: ${resultadoOperacion}`);


//Ejercicio 5
//const imprimirEnMayusculas = (texto) => {
  // console.log(texto.toUpperCase());
//};
// Ejemplo de uso
//imprimirEnMayusculas("prueba uno"); 

//Ejercicio 6
//for (let i = 1; i <= 10; i++) {
  // console.log(i);
//}

// Ejercicio 7
//const coche = {
  //marca: "Chevrolet",
  //modelo: "Camaro",
  //año: 2018,
  //color: "Rojo",
 // kilometraje: 1000,
  //encendido: false,
  // Encender el coche
  //encender: function() {
   // if (!this.encendido) {
   //   this.encendido = true;
   //   console.log("El coche está encendido.");
   // } else {
    //  console.log("El coche ya está encendido.");
   // }
 // },
  // Apagar el coche
 // apagar: function() {
  //  if (this.encendido) {
    //  this.encendido = false;
    //  console.log("El coche está apagado.");
   // } else {
   //   console.log("El coche ya está apagado.");
  //  }
  //},
  // Obtener la información del coche
  //obtenerInformacion: function() {
 //   return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año},
  //   Color: ${this.color}, Kilometraje: ${this.kilometraje} km`;
 // }
//};
//coche.encender(); // Encender el coche
//coche.apagar();   // Apagar el coche
//console.log(coche.obtenerInformacion()); // Obtener información del coche

//Ejercicio 8
////const coche = {
  //marca: "Chevrolet",
 // modelo: "Camaro",
  //año: 2018,
  //color: "Rojo",
  //kilometraje: 1000,
  //encendido: false,

  //encender: function () {
    //if (!this.encendido) {
     // this.encendido = true;
      //console.log("El coche está encendido.");
   // } else {
    //  console.log("El coche ya está encendido.");
   // }
  //},

  //apagar: function () {
   // if (this.encendido) {
    //  this.encendido = false;
     // console.log("El coche está apagado.");
    //} else {
    //  console.log("El coche ya está apagado.");
    //}
  //},

  //obtenerInformacion: function () {
  //  return `Marca: ${this.marca}, Modelo: ${this.modelo}, 
  //  Año: ${this.año}, Color: ${this.color}, Kilometraje: ${this.kilometraje} km`;
  //},

  //descripcion: function () {
  //  const estado = this.encendido ? "encendido" : "apagado";
  //  console.log(
  //    `Este es un ${this.marca} ${this.modelo} del año ${this.año},
  //     de color ${this.color}, con un kilometraje de ${this.kilometraje} 
   //    km. Actualmente está ${estado}.`
  //  );
  //},
//};

//coche.descripcion();
//coche.encender();
//coche.descripcion();
//coche.apagar();
//coche.descripcion();


//ejercicio 9

//function suma(a, b) {
  //return a + b;
// }
 //function resta(a, b) {
     //return a - b;
 //}
 //function multiplicacion(a, b) {
   //  return a * b;
 //}
 //function division(a, b) {
    // if (b === 0) {
     //    throw new Error("No se puede dividir por cero");
     //}
     //return a / b;
 //}
 //module.exports = {
   //  suma,
   //  resta,
    // multiplicacion,
   //  division
 //};

 //Ejercicio 10
 //function operacionAsincronica(datos, callback) {
 // console.log("Procesando operación asincrónica...");
   
 // setTimeout(() => {
 //     const resultado = `Resultado procesado: ${datos}`;
 //      callback(null, resultado); // null indica que no hubo error
//}, 4000); // Simulación de 4 segundos de retraso
//}

//  Uso de la función con un callback
//operacionAsincronica("Datos de prueba", (error, resultado) => {
 //  if (error) {
 //      console.error("Error:", error);
 //  } else {
 //    console.log("Operación completada:", resultado);
 //  }
//});

//Ejercicio 11
//function convertirANumero(cadena) {
  //try {
    //  let numero = Number(cadena);
     // Verificar el resultado
    //  if (isNaN(numero)) {
      //    throw new Error("La cadena no es un número válido.");
      //}

     // console.log(`La conversión fue exitosa: ${numero}`);
   //} catch (error) {
   //   console.log(`Error: ${error.message}`);
  //}
//}

//convertirANumero("456");       
//convertirANumero("12.45");      
//convertirANumero("abc");         
//convertirANumero("123abc");      
//convertirANumero("");            
