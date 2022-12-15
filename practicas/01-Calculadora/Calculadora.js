// CALCULADORA-OPERACIONES
let num1;
let num2;
class Calculadora {
    sumar (num1, num2) {
        number = num1 + num2;
        return verificar(number);
    }

    restar (num1, num2) {
        number = num1 - num2;
        if (num1 === num2) {
            return '0';
        }
        return verificar(number);
    }

    multiplicar (num1, num2) {
        number = num1 * num2;
        if (num2 == 0) {
            return '0';
        }
        return verificar(number);
    }

    dividir (num1, num2) {
        number = num1 / num2;
        return verificar(number);
    }

    residuo (num1, num2) {
        if (num1 % num2 === 0) {
            return '0';
        }
        if (num1 < num2) {
            return '0';
        }
        number =  num1 % num2;
        return verificar(number);
    }

    raizcuad (num1, num2) {
        number =  num2 ** (1/num1);
        if (num1 <= 0) {
            return 'Sintax ERROR'
        }
        return verificar(number);
    }
    
    elevado (num1, num2) {
        number =  num1 ** num2;
        return verificar(number);
    }
}

let number
function verificar (number) {
    number = number.toFixed(2)
    if (parseInt(number) == parseFloat(number)) {
        return parseInt(number)
    } else {
        return parseFloat(number)
    }
}

const calculadora = new Calculadora();
