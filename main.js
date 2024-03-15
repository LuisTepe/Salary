const rangosImpuestos = [
    { limiteInferior: 0.01, limiteSuperior: 644.58, cuotaFija: 0, porcentaje: 0.0192 },
    { limiteInferior: 644.59, limiteSuperior: 5470.92, cuotaFija: 12.38, porcentaje: 0.064 },
    { limiteInferior: 5470.93, limiteSuperior: 9614.66, cuotaFija: 321.26, porcentaje: 0.1088 },
    { limiteInferior: 9614.67, limiteSuperior: 11176.62, cuotaFija: 772.1, porcentaje: 0.16 },
    { limiteInferior: 11176.63, limiteSuperior: 13381.47, cuotaFija: 1022.01, porcentaje: 0.1792 },
    { limiteInferior: 13381.48, limiteSuperior: 26988.50, cuotaFija: 1417.12, porcentaje: 0.2136 },
    { limiteInferior: 26988.51, limiteSuperior: 42537.87, cuotaFija: 4323.58, porcentaje: 0.2352 },
    { limiteInferior: 42537.88, limiteSuperior: 81211.25, cuotaFija: 7980.38, porcentaje: 0.3 },
    { limiteInferior: 81211.26, limiteSuperior: 108281.67, cuotaFija: 19582.83, porcentaje: 0.32 },
    { limiteInferior: 108281.68, limiteSuperior: 324845.01, cuotaFija: 28237.79, porcentaje: 0.34 },
    { limiteInferior: 324845.02, limiteSuperior: Infinity, cuotaFija: 101876.9, porcentaje: 0.35 }
];

function calcularImpuestos(ganancia) {
    const { limiteInferior, cuotaFija, porcentaje } = rangosImpuestos.find(rango => ganancia <= rango.limiteSuperior);
    const base = ganancia - limiteInferior;
    const impuestos = base * porcentaje + cuotaFija;
    return { impuestos: impuestos.toFixed(2), cuotaFija, porcentaje: (porcentaje * 100).toFixed(2) };
}

document.getElementById('formSalario').addEventListener('submit', function(event) {
    event.preventDefault();
    const horas = Number(document.getElementById('horas').value);
    const tarifa = Number(document.getElementById('tarifa').value);

    let totalPago;
    totalPago = horas * tarifa;
    const { impuestos, cuotaFija, porcentaje } = calcularImpuestos(totalPago);
    totalPago = (totalPago - impuestos).toFixed(2);

    const table = document.getElementById('resultado');
    table.innerHTML = `
        <tr>
            <td>Salario bruto</td>
            <td>${horas * tarifa}</td>
        </tr>
        <tr>
            <td>Salario neto</td>
            <td>${totalPago}</td>
        </tr>
        <tr>
            <td>Impuestos</td>
            <td>${impuestos}</td>
        </tr>
        <tr>
            <td>Cuota Fija</td>
            <td>${cuotaFija.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Porcentaje ISR</td>
            <td>${porcentaje}%</td>
        </tr>
    `;
});