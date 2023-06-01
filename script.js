function conversor() {
    alert('Bienvenido/a al arbolito virtual');
    do {
        tipoConversion = prompt('Elige:\n1 para convertir de dolares a pesos\n2 para convertir de pesos a dolares\n0 para salir');
    } while (tipoConversion == '' || (tipoConversion != 1 && tipoConversion != 2 && tipoConversion != 0));
    if (tipoConversion != 0) {
        do {
            valorDolarHoy = Number(prompt('Cuál es el valor del dolar hoy?'));
        } while (valorDolarHoy == '' || isNaN(valorDolarHoy));
        if (tipoConversion == 1) {
            do {
                importe = Number(prompt('Cuántos dolares queres convertir a pesos?'));
            } while (importe == '' || isNaN(importe));
        } else if (tipoConversion == 2) {
            do {
                importe = Number(prompt('Cuántos pesos queres convertir a dolares?'));
            } while (importe == '' || isNaN(importe));
        }
    } else {
        alert('Te esperamos la proxima');
    }

    if (tipoConversion == 1) {
        alert('Hoy, u$' + importe + ' son $' + importe * valorDolarHoy);
    } else if (tipoConversion == 2) {
        alert('Hoy, $' + importe + ' son u$' + importe / valorDolarHoy);
    }
}

conversor();
