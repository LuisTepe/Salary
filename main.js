document.getElementById('formSalario').addEventListener('submit', function(event) {
    event.preventDefault();
    var horas = document.getElementById('horas').value;
    var tarifa = document.getElementById('tarifa').value;
    var totalPago = horas * tarifa;

    if(horas>40){
        totalHorasExtra = horas-40;
        totalHoras = horas-totalHorasExtra;
        totalPago = (totalHoras*tarifa)+(totalHorasExtra*tarifa*1.5);
        document.getElementById('resultado').textContent = 'El salario es: ' + totalPago;
    } else {
        totalPago = horas * tarifa;
        document.getElementById('resultado').textContent = 'El salario es: ' + totalPago;
    }   
    
});

    