import PropTypes from 'prop-types'

const Hookstate05a = ({funcao}) => {

   
    return (
        <>
           <button onClick={funcao}>Atualizar</button>
        </>
    )
}

Hookstate05a.propTypes = {
    funcao: PropTypes.func.isRequired
}

export default Hookstate05a