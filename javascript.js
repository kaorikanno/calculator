function add(num1, num2) {
    let suma = num1 + num2;
    return suma;
}

function subtract(num1, num2) {
    let resta = num1 - num2;
    return resta;
}

function multiply(num1, num2) {
    let mult = num1*num2;
    return mult;
}

function divide(num1, num2) {
    if (num2 != 0) {
        let divi = num1/num2;
        return divi;
    }
    else {
        return "Error!"
    }
}

function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2)
    }

    else if (operator == '-') {
        return subtract(num1, num2)
    }

    else if (operator == 'x') {
        return multiply(num1, num2)
    }

    else if (operator == '/') {
        return divide(num1, num2)
    }

    else {
        return 'Operación inválida'
    }
}

let valor1 = 0;
let equ = 'nada';
let valor2 = 0;

function numOperate(num) {
    if (equ == 'nada') {
      valor1 = valor1*10 + num
      document.getElementById("input").innerText = valor1;
    }
    else {
        valor2 = valor2*10 + num
        document.getElementById("input").innerText = `${valor1} ${equ} ${valor2}`;
    }
}

function equation(eq) {
    if (valor2 == 0) {
      equ = eq
      document.getElementById("input").innerText = `${valor1} ${eq}`;
      return equ
    }
    else {
        valor1 = operate(valor1, equ, valor2);
        valor2 = 0;
        equ = eq
        document.getElementById("input").innerText = `${valor1} ${eq}`;
    }
}

function equal() {
    if (equ != "nada") {
      let result = operate(valor1, equ, valor2);
      result = Math.round(result * 100) / 100
      document.getElementById("input").innerText = result;
      valor1 = result;
      equ = 'nada';
      valor2 = 0;
    }
}

function clean() {
    valor1 = 0;
    equ = 'nada';
    valor2 = 0;
    document.getElementById("input").innerText = " - __ - ";
}

function deletear() {
    if (valor2 == 0) {
        quitar = valor1%10
        valor1 -=quitar
        valor1 = valor1/10
        document.getElementById("input").innerText = valor1;
    }
    else {
        quitar = valor2%10
        valor2 -=quitar
        valor2 = valor2/10
        document.getElementById("input").innerText = `${valor1} ${equ} ${valor2}`;
    }
}
