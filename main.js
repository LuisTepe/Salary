document.getElementById('formSalario').addEventListener('submit', function(event) {
    event.preventDefault();
    const horas = Number(document.getElementById('horas').value);
    const tarifa = Number(document.getElementById('tarifa').value);

    let totalPago;
    let totalHorasExtra;

    if(horas > 40){
        totalHorasExtra = horas - 40;
        const totalHoras = horas - totalHorasExtra;
        totalPago = (totalHoras * tarifa) + (totalHorasExtra * tarifa * 1.5);
        document.getElementById('resultado').innerHTML = `El salario es: ${totalPago} <br> Horas extras: ${totalHorasExtra}`;
    } else {
        totalPago = horas * tarifa;
        document.getElementById('resultado').innerHTML = `El salario es: ${totalPago} <br> No hay horas extras.`;
    }
});