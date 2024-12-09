import PropTypes from 'prop-types'
const Hookstate_07a = ({funcaoDec, funcaoInc}) => {



    return (
        <>
            <button onClick={funcaoDec}>-</button>
            <button onClick={funcaoInc}>+</button>
            <hr />
        </>
    )
}

Hookstate_07a.propTypes = {
    funcaoDec: PropTypes.func,
    funcaoInc: PropTypes.func
}

export default Hookstate_07a 