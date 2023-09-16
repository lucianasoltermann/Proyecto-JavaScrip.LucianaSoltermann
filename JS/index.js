let usuario = {
    nombre: prompt("Ingrese su nombre"),
    edad: parseInt(prompt("Ingrese su edad")),
    mail: prompt("Ingrese su correo"),
  };
  
console.log("Bienvenido " + usuario.nombre);
console.log("Tienes " + usuario.edad + " años.");
console.log("Tu correo es: " + usuario.mail);


let ingresosneto = parseInt(prompt("Escriba su ingreso neto mensual"))
console.log("Tus ingresos este mes son de " + ingresosneto);

const gastos = [];
const deudas = [];
const inversiones = [];

while (true) {
  const tipo = prompt("Ingrese el tipo (gasto/deuda/inversion) o 'fin' para salir:");
  if (tipo === "fin") break;

  const monto = parseFloat(prompt("Ingrese el monto:"));

  if (tipo === "gasto") {
    agregarGasto(monto);
  } else if (tipo === "deuda") {
    agregarDeuda(monto);
  } else if (tipo === "inversion") {
    agregarInversion(monto);
  }
}

function agregarGasto(monto) {
  gastos.push(monto);
}

function agregarDeuda(monto) {
  deudas.push(monto);
}

function agregarInversion(monto) {
  inversiones.push(monto);
}

console.log("Tus gastos este mes son:");
gastos.forEach(gasto => {
  console.log(gasto);
});

let gastoTotal = 0;
for (let i = 0; i < gastos.length; i++) {
  gastoTotal += gastos[i];
}
console.log("El gasto total es: $" + gastoTotal)

console.log("Tus deudas este mes son:");
deudas.forEach(deuda => {
  console.log(deuda);
});

let deudaTotal = 0;
for (let i = 0; i < deudas.length; i++) {
    deudaTotal += deudas[i];
}
console.log("Las deudas totales son: $" + deudaTotal)

console.log("Tus inversiones este mes son:");
inversiones.forEach(inversion => {
  console.log(inversion);
});

for (let i = 1; i <=12; i++) {
    console.log ("Estos serian tus ahorros, mes a mes, " + inversiones * i + " si tus inversiones se mantienen.")}


const balance = (a, b, c) => {
    return ingresosneto - (gastoTotal+ deudaTotal);
}
alert("Tu dinero disponible para este mes es $" + balance (ingresosneto, gastos, deudas));
