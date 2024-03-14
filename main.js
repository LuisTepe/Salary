document.getElementById('formSalario').addEventListener('submit', function(event) {
    event.preventDefault();
    var horas = document.getElementById('horas').value;
    var tarifa = document.getElementById('tarifa').value;
    var salario = horas * tarifa;
    document.getElementById('resultado').textContent = 'El salario es: ' + salario;
});