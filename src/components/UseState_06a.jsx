import PropTypes from 'prop-types'

const Hookstate_06a = ({funcaoDec, funcaoInc}) => {


    return(
        <>
            <button onClick={funcaoDec}>-</button>
            <button onClick={funcaoInc}>+</button>
        </>
    )
}

Hookstate_06a.propTypes = {
    funcaoDec: PropTypes.func.isRequired,
    funcaoInc: PropTypes.func.isRequired
}

export default Hookstate_06a