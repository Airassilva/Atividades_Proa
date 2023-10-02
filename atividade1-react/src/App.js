/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import MeuComponente from "./PrimeiroComponente";
import OutroComponente from "./OutroComponente";
import Template from "./TemplateExpress";
import ContaBancaria from "./ContaBancaria";
import Treinamento from "./Treinamento";
import SomaComponente from "./Soma";
import Caluladora from "./Calculadora";
import Somar from "./Somar";
import './App.css';

function App(){
  return(
   <div className="App">
    <h1>Fundamentos React</h1>
    <Template/>
    <Caluladora/>
    <Somar/>
   </div>
  );
}
export default App;
