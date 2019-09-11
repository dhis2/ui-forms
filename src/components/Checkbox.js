import React, { useCallback } from 'react'
import { Field, Checkbox as CoreCheckbox, Help } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const Checkbox = ({
    label,
    required,
    disabled,
    name,
    value,
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
            value={value}
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
}

const useCheckboxOnChange = onChange =>
    useCallback(event => onChange(!!event.target.checked), [onChange])

const CheckboxAdapter = props => (
    <FieldAdapter
        {...props}
        component={Checkbox}
        useOnChange={useCheckboxOnChange}
    />
)

export { Checkbox, CheckboxAdapter }
