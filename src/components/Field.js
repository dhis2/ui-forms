import { Field } from 'react-final-form'
import propTypes from 'prop-types'

const fieldInputProps = {
    name: propTypes.string.isRequired,
    onBlur: propTypes.func,
    onChange: propTypes.func.isRequired,
    onFocus: propTypes.func,
    value: propTypes.any,
}

const fieldMetaProps = {
    active: propTypes.bool,
    data: propTypes.object,
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
}

const fieldRenderProps = {
    input: propTypes.shape(fieldInputProps).isRequired,
    meta: propTypes.shape(fieldMetaProps).isRequired,
}

export { Field, fieldInputProps, fieldMetaProps, fieldRenderProps }
