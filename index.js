document.addEventListener("DOMContentLoaded", function() {
    const txtop1 = document.getElementById("op1");
    const txtoperador = document.getElementById("operador");
    const txtop2 = document.getElementById("op2");
    const btncalcular = document.getElementById("calcular");
    const pResultado = document.getElementById("resultado");

    function calcular() {
        console.log("Calculando...");
        console.log(txtoperador.value);
        const operador = txtoperador.value;
        const op1 = parseFloat(txtop1.value)
        const op2 = parseFloat(txtop2.value)

        if ((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op2))  
            {
            switch(operador){
                case"+":
                    resultado = op1 + op2
                    break;
                case"-":
                    resultado = op1 - op2
                    break;
                case"*":
                    resultado = op1 * op2
                    break;
                case"/":
                    resultado = op1 / op2
                    break
            }
            pResultado.innerText = "= " + resultado
        } else {
            pResultado.innerText = "Calculo imposible"
        }
    }

    btncalcular.addEventListener("click", calcular);
});