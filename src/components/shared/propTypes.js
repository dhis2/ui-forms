import propTypes from '@dhis2/prop-types'

export const toggleGroupOptionsProp = propTypes.arrayOf(
    propTypes.shape({
        label: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
    })
)

export const fieldRenderProps = {
    input: propTypes.shape({
        name: propTypes.string.isRequired,
        onBlur: propTypes.func,
        onChange: propTypes.func.isRequired,
        onFocus: propTypes.func,
        value: propTypes.any,
    }).isRequired,
    meta: propTypes.shape({
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
    }).isRequired,
}
