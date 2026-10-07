import './App.scss';
import { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);

  const [num5, setNum5] = useState(0);
  const [num6, setNum6] = useState(0);

  const [num7, setNum7] = useState(0);
  const [num8, setNum8] = useState(0);

  const [num9, setNum9] = useState(0);
  const [num10, setNum10] = useState(0);

  const [soma, setSoma] = useState(0);
  const [subtracao, setSubtracao] = useState(0);
  const [multiplicacao, setMultiplicacao] = useState(0);
  const [divisao, setDivisao] = useState(0);
  const [exponencial, setExponencial] = useState(0);


  const [verdadeiro, setVerdadeiro] = useState(false);

  return (
    <div className="App">
      <h1>Calculadora</h1>

      <input
        type="number"
        name=""
        id=""
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        required
      />

      <input
        type="number"
        name=""
        id=""
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        required
      />

      <button
        className="somar"
        onClick={() => {
          const somar = num1 + num2;
          setSoma(somar)
        }}>
        Somar
      </button>

      <h2>{soma}</h2>


      <input
        type="number"
        name=""
        id=""
        value={num3}
        onChange={(e) => setNum3(Number(e.target.value))}
        required
      />

      <input
        type="number"
        name=""
        id=""
        value={num4}
        onChange={(e) => setNum4(Number(e.target.value))}
        required
      />

      <button
        className="somar"
        onClick={() => {
          const subtrair = num3 - num4;
          setSubtracao(subtrair)
        }}>
        Subtrair
      </button>

      <h2>{subtracao}</h2>


      <input
        type="number"
        name=""
        id=""
        value={num5}
        onChange={(e) => setNum5(Number(e.target.value))}
        required
      />

      <input
        type="number"
        name=""
        id=""
        value={num6}
        onChange={(e) => setNum6(Number(e.target.value))}
        required
      />

      <button
        className="somar"
        onClick={() => {
          const multiplicar = num5 * num6;
          setMultiplicacao(multiplicar)
        }}>
        Multiplicar
      </button>

      <h2>{multiplicacao}</h2>

      <input
        type="number"
        name=""
        id=""
        value={num7}
        onChange={(e) => setNum7(Number(e.target.value))}
        required
      />

      <input
        type="number"
        name=""
        id=""
        value={num8}
        onChange={(e) => setNum8(Number(e.target.value))}
        required
      />

      <button
        className="somar"
        onClick={() => {
          const divisao = num7 / num8;
          setDivisao(divisao)
        }}>
        Dividir
      </button>

      <h2>{divisao}</h2>


      <input
        type="number"
        name=""
        id=""
        value={num9}
        onChange={(e) => setNum9(Number(e.target.value))}
        required
      />

      <input
        type="number"
        name=""
        id=""
        value={num10}
        onChange={(e) => setNum10(Number(e.target.value))}
        required
      />

      <button
        className="somar"
        onClick={() => {
          const exponencial = num9 ** num10;
          setExponencial(exponencial)
        }}>
        Elevar
      </button>

      <h2>{exponencial}</h2>

      <section className="verificar">
        <h1>Gosta de codar?</h1>
        <h2>{verdadeiro ? "Sim" : "Não"}</h2>
        <input
          type="checkbox"
          name=""
          id=""
          value={verdadeiro} 
          onChange={(e) => setVerdadeiro(e.target.checked)}
          />
      </section>
    </div>
  );
}
