let nombreUsuario = prompt ("Ingrese su nombre")
    console.log("Bienvenido " +  nombreUsuario);

let ingresosneto = parseInt(prompt("Escriba su ingreso neto mensual"))
    console.log(ingresosneto);

let gastos = parseInt(prompt ("Ingrese sus gastos mensuales"));
    if (gastos ==0){
        console.log("Ingresaste un valor no válido para gastos");
    }
    else{
        console.log("Gastos " + gastos);
    }

let inversiones = parseInt (prompt ("Ingrese las inversiones que desea hacer este mes"));
    if (inversiones ==0){
    console.log("Ingresaste un valor no válido para inversiones");
    }
    else{
    console.log("Inversiones " + inversiones);
    }

let deudas = parseInt (prompt("Ingrese si se presenta alguna deuda"));
    if (deudas ==0){
        console.log("Ingresaste un valor no válido para deudas");
    }
    else{
        console.log("Deudas " + deudas);
    }

const balance = (a, b, c) => {
    return ingresosneto - (gastos + deudas);
}
console.log(balance (ingresosneto, gastos, deudas));


for (let i = 1; i <=12; i++) {
    console.log (inversiones * i)}
