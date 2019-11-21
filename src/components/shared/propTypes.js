import propTypes from '@dhis2/prop-types'

export const toggleGroupOptionsProp = propTypes.arrayOf(
    propTypes.shape({
        label: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
    })
).isRequired
