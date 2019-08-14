import { useForm } from 'react-final-form'
import propTypes from 'prop-types'

const Conditional = ({ show, fieldsToClearOnHide, children }) => {
    const { getFieldState, mutators } = useForm()

    if (show) {
        return children
    }

    if (mutators.clear) {
        fieldsToClearOnHide.forEach(fieldName => {
            const fieldState = getFieldState(fieldName)
            if (fieldState && fieldState.value) {
                mutators.clear(fieldName)
            }
        })
    }

    return null
}

Conditional.propTypes = {
    show: propTypes.bool,
    fieldsToClearOnHide: propTypes.arrayOf(propTypes.string),
    children: propTypes.oneOfType([
        propTypes.node,
        propTypes.arrayOf(propTypes.node),
    ]),
}

Conditional.defaultProps = {
    show: true,
    fieldsToClearOnHide: [],
}

export { Conditional }
