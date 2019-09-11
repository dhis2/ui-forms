import React, { useCallback } from 'react'
import { Field, Checkbox as CoreCheckbox, Help } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const useCheckboxOnChange = onChange =>
    useCallback(event => onChange(!!event.target.checked), [onChange])

const Checkbox = ({
    label,
    required,
    disabled,
    name,
    value,
    onChange: adapterOnChange,
    error,
    warning,
    valid,
    helpText,
    errorText,
}) => {
    const onChange = useCheckboxOnChange(adapterOnChange)

    return (
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
}

Checkbox.propTypes = {
    ...adapterComponentProps,
}

const CheckboxAdapter = props => (
    <FieldAdapter {...props} component={Checkbox} />
)

export { Checkbox, CheckboxAdapter }
