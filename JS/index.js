const createArrayFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

const arrayIngresos = createArrayFromLocalStorage('arrayIngresos');
const arrayGastos = createArrayFromLocalStorage('arrayGastos');
const arrayDeudas = createArrayFromLocalStorage('arrayDeudas');
const arrayInversiones = createArrayFromLocalStorage('arrayInversiones');

const addToLocalStorageAndList = (array, key, input, list) => {
    const inputValue = parseFloat(input.value);
    if (!isNaN(inputValue)) {
        array.push(inputValue);
        const item = document.createElement("li");
        item.innerText = inputValue;
        list.appendChild(item);
        localStorage.setItem(key, JSON.stringify(array));
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Input vacío o no válido!',
        });
    }
    input.focus();
    input.value = '';
};

const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar");
agregarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addToLocalStorageAndList(arrayIngresos, 'arrayIngresos', agregarInput, agregar);
});

const gastosForm = document.querySelector("#gastos-form");
const gastosInput = document.querySelector("#gastos-input");
const gastos = document.querySelector("#gastos");
gastosForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addToLocalStorageAndList(arrayGastos, 'arrayGastos', gastosInput, gastos);
});

const deudasForm = document.querySelector("#deudas-form");
const deudasInput = document.querySelector("#deudas-input");
const deudas = document.querySelector("#deudas");
deudasForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addToLocalStorageAndList(arrayDeudas, 'arrayDeudas', deudasInput, deudas);
});

const inversionesForm = document.querySelector("#inversiones-form");
const inversionesInput = document.querySelector("#inversiones-input");
const inversiones = document.querySelector("#inversiones");
inversionesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addToLocalStorageAndList(arrayInversiones, 'arrayInversiones', inversionesInput, inversiones);
});


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

    let proyecciones = inversionesTotal*12;
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
    resultadosElement.innerHTML = '<h3 class="tituloResultados">RESULTADOS</h3>';
})
window.addEventListener('load', () => {
    localStorage.clear();
    resultadosElement.innerHTML = '<h3 class="tituloResultados">RESULTADOS</h3>';
});

const btntasa = document.querySelector("#btntasa")
btntasa.addEventListener ("click", ()=>{
    fetch('https://api.frankfurter.app/latest?from=EUR')
        .then(response => response.json())
        .then(data => {
            const rates = data.rates;
            const ul = document.createElement('ul');
        for (const currency in rates) {
        const rate = rates[currency];
    const li = document.createElement('li');
                    li.textContent = `${currency}: ${rate}`;
                    ul.appendChild(li);
                }
                document.getElementById('exchangeRates').appendChild(ul);
            })
            .catch(error => {
                console.error('Error al obtener las tasas de cambio: ' + error);
            });
})
