// If the input has a value (checkedValue prop) the form value is: checkedValue || ''
// Otherwise the form-value is: true || false
const getToggleValue = ({ checked, value }) => {
    if (value) {
        return checked ? value : ''
    }
    return checked
}

const createToggleChangeHandler = onChange => payload =>
    onChange(getToggleValue(payload))

export { createToggleChangeHandler }
