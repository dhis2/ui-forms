import { Field } from 'react-final-form'
import propTypes from 'prop-types'

const fieldRenderProps = {
    input: propTypes.shape({
        name: propTypes.string.isRequired,
        onBlur: propTypes.func,
        onChange: propTypes.func.isRequired,
        onFocus: propTypes.func,
        value: propTypes.any,
    }),
    meta: propTypes.shape({
        active: propTypes.bool,
        data: propTypes.bool,
        dirty: propTypes.bool,
        dirtySinceLastSubmit: propTypes.bool,
        error: propTypes.string,
        initial: propTypes.any,
        invalid: propTypes.bool,
        modified: propTypes.bool,
        pristine: propTypes.bool,
        submitError: propTypes.string,
        submitFailed: propTypes.bool,
        submitSucceeded: propTypes.bool,
        submitting: propTypes.bool,
        touched: propTypes.bool,
        valid: propTypes.bool,
        validating: propTypes.bool,
        visited: propTypes.bool,
    }),
}

export { Field, fieldRenderProps }
