
import { useState } from "react";

export default function Calculadora({ 
    operacao = "+" 
}) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function calcular() {
        let valor;

        if (operacao === "+") {
            valor = num1 + num2;
        } else if (operacao === "-") {
            valor = num1 - num2;
        } else if (operacao === "*") {
            valor = num1 * num2;
        } else if (operacao === "/") {
            if (num2 === 0) {
                valor = "Erro: divisão por zero";
            } else {
                valor = num1 / num2;
            }
        } else if (operacao === "**") {
            valor = num1 ** num2;
        } else {
            valor = "Operação inválida";
        }

        setResultado(valor);
    }

    return (
        <>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
            />

            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
            />

            <button onClick={calcular}>
                Calcular
            </button>

            <h2>{resultado}</h2>
        </>
    );
}