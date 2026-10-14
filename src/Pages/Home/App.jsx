import './App.scss';
import Calculadora from "../Components/calcular.jsx";

export default function App() {

  return (
    <div className="App">
      <h1>Calculadora</h1>

      <Calculadora
        operacao='+'
      />
      
      <Calculadora
        operacao='-'
      />

      <Calculadora
        operacao='*'
      />

      <Calculadora
        operacao='/'
      />

      <Calculadora
        operacao='**'
      />
    </div>
  );
}
