import React, { useState } from 'react';

 

function Somar() {

  const [valorEntrada1, setValorEntrada1] = useState(''); // Estado para armazenar o valor inserido
  const [valorEntrada2, setValorEntrada2] = useState(''); 
  const [valorSaida, setValorSaida] = useState(''); // Estado para armazenar o resultado

 

  // Função para lidar com a alteração do valor de entrada

  const manipulaMudanca1 = (event) => {
    setValorEntrada1(event.target.value);
  };

  const manipulaMudanca2 = (event) => {
    setValorEntrada2(event.target.value);
  };
  

 

  // Função para dobrar o valor inserido

  const someValue = () => {

    const value1 = parseFloat(valorEntrada1); // Converte a entrada para um número
    const value2 = parseFloat(valorEntrada2); 

    if (!isNaN(value1 || value2)) {

      setValorSaida(`A Soma é ${value1 + value2}`);

    } else {

      setValorSaida('Por favor, insira um número válido.');

    }

  };


  return (

    <div>

      <h1>Calculadora Simples</h1>

      <input type="number" step="0.01" placeholder="Insira um valor" value={valorEntrada1} onChange={manipulaMudanca1}/>
      <br></br>
      <input type="number" step="0.01" placeholder="Insira um valor" value={valorEntrada2} onChange={manipulaMudanca2}/>

      <button onClick={someValue}>Somar</button>

      <p>{valorSaida}</p>

    </div>

  );

}

export default Somar;