document.getElementById('formSalario').addEventListener('submit', function(event) {
    event.preventDefault();
    const horas = Number(document.getElementById('horas').value);
    const tarifa = Number(document.getElementById('tarifa').value);
    const tipoSalario = document.getElementById('tipoSalario').value;

    let totalPago;
    let totalHorasExtra;
    let impuestos;

    if(horas > 40){
        totalHorasExtra = horas - 40;
        const totalHoras = horas - totalHorasExtra;
        totalPago = (totalHoras * tarifa) + (totalHorasExtra * tarifa * 1.5);
    } else {
        totalPago = horas * tarifa;
    }

    switch(tipoSalario) {
        case 'A':
            impuestos = totalPago * 0.15; // 15% de impuestos para el tipo A
            break;
        case 'B':
            impuestos = totalPago * 0.20; // 20% de impuestos para el tipo B
            break;
        default:
            impuestos = totalPago * 0.10; // 10% de impuestos por defecto
    }

    totalPago = totalPago - impuestos;

    const table = document.getElementById('resultado');
    table.innerHTML = `
        <tr>
            <td>Salario</td>
            <td>${totalPago}</td>
        </tr>
        <tr>
            <td>Horas extras</td>
            <td>${totalHorasExtra || 'No hay horas extras'}</td>
        </tr>
        <tr>
            <td>Impuestos</td>
            <td>${impuestos}</td>
        </tr>
    `;
});