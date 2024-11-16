import PropTypes from 'prop-types'

const IncrementDecrement = ({ index, value, updateValue }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <h3>Componente {index + 1}</h3>
      <p>Valor: {value}</p>
      <button onClick={() => updateValue(index, 1)}>Incrementar</button>
      <button onClick={() => updateValue(index, -1)}>Decrementar</button>
    </div>
  );
};


IncrementDecrement.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    updateValue: PropTypes.number.isRequired
}


export default IncrementDecrement;
