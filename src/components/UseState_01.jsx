import { useState } from 'react';
import IncrementDecrement from './IncrementDecrement';

const Main = () => {
  // Estado que mantém os valores numéricos
  const [values, setValues] = useState([0, 0, 0]);

  // Função para atualizar o valor no índice específico
  const updateValue = (index, delta) => {
    const newValues = [...values];
    newValues[index] += delta;
    setValues(newValues);
  };

  return (
    <div>
      <h1>Incremento e Decremento com 3 Valores</h1>
      <div>
        {/* Passando o valor atual e a função de atualização para cada filho */}
        {values.map((value, index) => (
          <IncrementDecrement
            key={index}
            index={index}
            value={value}
            updateValue={updateValue}
          />
        ))}
      </div>
      <div>
        <h2>Valores Atuais:</h2>
        <p>{`Valor 1: ${values[0]}`}</p>
        <p>{`Valor 2: ${values[1]}`}</p>
        <p>{`Valor 3: ${values[2]}`}</p>
      </div>
    </div>
  );
};

export default Main;
