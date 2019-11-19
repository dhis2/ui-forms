import React, { useCallback } from 'react'
import propTypes from 'prop-types'

import { adapterComponentProps } from './FieldAdapter.js'

const Toggle = ({ value, checkedValue, component: Component, ...rest }) => (
    <Component checked={!!value} value={checkedValue} {...rest} />
)

Toggle.propTypes = {
    ...adapterComponentProps,
    checkedValue: propTypes.string,
}

// If the input has a value (checkedValue prop) the form value is: checkedValue || ''
// Otherwise the form-value is: true || false
const getValue = ({ checked, value }) => {
    if (value) {
        return checked ? value : ''
    } else {
        return !!checked
    }
}

const useToggleOnChange = onChange =>
    useCallback(payload => onChange(getValue(payload)), [onChange])

export { Toggle, useToggleOnChange }
