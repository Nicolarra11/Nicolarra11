

//Operadores

function suma(n1, n2) {
    return n1 + n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function multiplicacion(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    if (n2 === 0) {
        window.alert("Ups!.. No se puede dividir por cero, ingrese otro número. Pulse el botón 'C' para borrar y comenzar de nuevo.");
        return;
    }
    return n1 / n2;
}


/*-----------------------------------------------------------------------------------*/


// Realizo la operacion elegida

function calcularResultado() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let operador = document.getElementById("operador").value;
    let Resultado = 0;

// Validacion 1 --> ambos campos deben estar completos para que la calculadora funcione

    if (isNaN(n1) || isNaN(n2)) {
        alert("Ups!.. Ingrese valores en ambos campos por favor.");
        return;
}                   

    switch (operador) {
        case "+":
            Resultado = suma(n1, n2);
            break;
        case "-":
            Resultado = resta(n1, n2);
            break;
        case "*":
            Resultado = multiplicacion(n1, n2);
            break;
        case "/":
            Resultado = division(n1, n2);
            break;
        default:
            alert("Ingrese un Operador por favor");
            return;
    }

// Validacion 2 --> máximo 15 caracteres, si me excedo hay alerta 

    if (Resultado > 999999999999999 || Resultado < -999999999999999) {
        alert("Ups!.. Se excedió el límite de caracteres del campo (Máximo 15)")
        Resultado = 0
    }

    document.getElementById("resultado").textContent = Resultado;
}

/*-----------------------------------------------------------------------------------*/ 

//boton para borrar

function botonC() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").textContent = 0;
}