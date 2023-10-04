const arrayIngresos = JSON.parse(localStorage.getItem('arrayIngresos')) || [];
const arrayGastos = JSON.parse(localStorage.getItem('arrayGastos')) || [];
const arrayDeudas = JSON.parse(localStorage.getItem('arrayDeudas')) || [];
const arrayInversiones = JSON.parse(localStorage.getItem('arrayInversiones')) || [];

const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar");

agregarForm.addEventListener("submit", agregarItems);

function agregarItems(e) {
    e.preventDefault();

    if (agregarInput.value != "") {
        arrayIngresos.push(agregarInput.value);
        let item = document.createElement("li");
        item.innerText = agregarInput.value;
        agregar.append(item);

        // Guardar en localStorage después de agregar
        localStorage.setItem('arrayIngresos', JSON.stringify(arrayIngresos));
    } else {
        alert("Input vacío!")
    }

    agregarInput.focus();
    agregarForm.reset();
}

const gastosForm = document.querySelector("#gastos-form");
const gastosInput = document.querySelector("#gastos-input");
const gastos = document.querySelector("#gastos");

gastosForm.addEventListener("submit", agregarItemsGastos);

function agregarItemsGastos(e) {
    e.preventDefault();

    if (gastosInput.value != "") {
        arrayGastos.push(gastosInput.value);
        let item = document.createElement("li");
        item.innerText = gastosInput.value;
        gastos.append(item);

        // Guardar en localStorage después de agregar
        localStorage.setItem('arrayGastos', JSON.stringify(arrayGastos));
    } else {
        alert("Input vacío!")
    }

    gastosInput.focus();
    gastosForm.reset();
}

const deudasForm = document.querySelector("#deudas-form");
const deudasInput = document.querySelector("#deudas-input");
const deudas = document.querySelector("#deudas");

deudasForm.addEventListener("submit", agregarItemsDeudas);

function agregarItemsDeudas(e) {
    e.preventDefault();

    if (deudasInput.value != "") {
        arrayDeudas.push(deudasInput.value);
        let item = document.createElement("li");
        item.innerText = deudasInput.value;
        deudas.append(item);

        // Guardar en localStorage después de agregar
        localStorage.setItem('arrayDeudas', JSON.stringify(arrayDeudas));
    } else {
        alert("Input vacío!")
    }

    deudasInput.focus();
    deudasForm.reset();
}

const inversionesForm = document.querySelector("#inversiones-form");
const inversionesInput = document.querySelector("#inversiones-input");
const inversiones = document.querySelector("#inversiones");

inversionesForm.addEventListener("submit", agregarItemsInvesiones);

function agregarItemsInvesiones(e) {
    e.preventDefault();

    if (inversionesInput.value != "") {
        arrayInversiones.push(inversionesInput.value);
        let item = document.createElement("li");
        item.innerText = inversionesInput.value;
        inversiones.append(item);

        // Guardar en localStorage después de agregar
        localStorage.setItem('arrayInversiones', JSON.stringify(arrayInversiones));
    } else {
        alert("Input vacío!")
    }

    inversionesInput.focus();
    inversionesForm.reset();
}

const btncalcular = document.querySelector("#btnCalcular");
const resultadosElement = document.getElementById('resultados');

btncalcular.addEventListener("click", () => {
    let ingresoTotal = 0
    for (let i = 0; i < arrayIngresos.length; i++) {
        ingresoTotal += parseInt(arrayIngresos[i]);
    }

    let gastoTotal = 0;
    for (let i = 0; i < arrayGastos.length; i++) {
        gastoTotal += parseInt(arrayGastos[i]);
    }

    let deudaTotal = 0;
    for (let i = 0; i < arrayDeudas.length; i++) {
        deudaTotal += parseInt(arrayDeudas[i]);
    }

    const balance = (a, b, c) => {
        return ingresoTotal - (gastoTotal + deudaTotal)
    }

    let inversionesTotal = 0;
    for (let i = 0; i < arrayInversiones.length; i++) {
        const parsedValue = parseInt(arrayInversiones[i]);
        if (!isNaN(parsedValue)) {
            inversionesTotal += parsedValue;
        }
    }

    let proyecciones = inversionesTotal;
    for (let i = 1; i <= 12; i++) {
        const parsedValue = parseInt(inversionesInput.value * i);
        if (!isNaN(parsedValue)) {
            proyecciones += parsedValue;
        }
    }

    localStorage.setItem("arrayIngresos", JSON.stringify(arrayIngresos));
    localStorage.setItem("arrayGastos", JSON.stringify(arrayGastos));
    localStorage.setItem("arrayDeudas", JSON.stringify(arrayDeudas));
    localStorage.setItem("arrayInversiones", JSON.stringify(arrayInversiones));

    resultadosElement.innerHTML = `
    <p class="ingreso">Tu ingreso este mes es de $${ingresoTotal}</p>
    <p class="gasto">El gasto total es: $${gastoTotal}</p>
    <p class="deuda">Las deudas totales son: $${deudaTotal}</p>
    <p class="balance">Tu dinero disponible este mes es: $${balance(ingresoTotal, gastoTotal, deudaTotal)}</p>
    <p class= "inversiones"> Tus inversiones este mes fueron de: $${inversionesTotal}</p>
    <p class="proyecciones">Estos serían tus ahorros, mes a mes, ${proyecciones} si tus inversiones se mantienen.</p>
    `;
});

const btnReset = document.querySelector("#reset")
btnReset.addEventListener("click", () => {
    localStorage.clear();
})

