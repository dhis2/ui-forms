import React, { useCallback } from 'react'
import propTypes from 'prop-types'
import { CheckboxField } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const CheckboxComponent = ({ value, checkedValue, ...rest }) => (
    <CheckboxField checked={!!value} value={checkedValue} {...rest} />
)

CheckboxComponent.propTypes = {
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

const useCheckboxOnChange = onChange =>
    useCallback(payload => onChange(getValue(payload)), [onChange])

const Checkbox = props => (
    <FieldAdapter
        {...props}
        component={CheckboxComponent}
        useOnChange={useCheckboxOnChange}
    />
)

export { Checkbox }
