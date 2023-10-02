import React, { useState } from 'react';


function Calculadora() {
  const [inputValue, setInputValue] = useState(''); // Estado para armazenar o valor inserido
  const [result, setResult] = useState(''); // Estado para armazenar o resultado

  // Função para lidar com a alteração do valor de entrada
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  // Função para dobrar o valor inserido
  const doubleValue = () => {
    const value = parseFloat(inputValue); // Converte a entrada para um número
    if (!isNaN(value)) {
      setResult(`O dobro de ${value} é ${value * 2}`);
    } else {
      setResult('Por favor, insira um número válido.');
    }
  };

  return (
<div>
<h1>Calculadora Simples</h1>
<input
        type="text"
        placeholder="Insira um valor"
        value={inputValue}
        onChange={handleInputChange}
      />
<button onClick={doubleValue}>Dobrar</button>
<p>{result}</p>
</div>
  );
}

 
export default Calculadora;