import React, { useCallback } from 'react'
import propTypes from '@dhis2/prop-types'
import { Field, Checkbox as CoreCheckbox, Help } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const Checkbox = ({
    label,
    required,
    disabled,
    name,
    value,
    checkedValue,
    onChange,
    error,
    warning,
    valid,
    helpText,
    errorText,
}) => (
    <Field>
        <CoreCheckbox
            required={required}
            name={name}
            disabled={disabled}
            value={checkedValue}
            label={label}
            checked={!!value}
            onChange={onChange}
            error={error}
            warning={warning}
            valid={valid}
        />
        {helpText && <Help>{helpText}</Help>}
        {error && errorText && <Help error>{errorText}</Help>}
    </Field>
)

Checkbox.propTypes = {
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
    useCallback(event => onChange(getValue(event.target)), [onChange])

const CheckboxAdapter = props => (
    <FieldAdapter
        {...props}
        component={Checkbox}
        useOnChange={useCheckboxOnChange}
    />
)

export { Checkbox, CheckboxAdapter }
