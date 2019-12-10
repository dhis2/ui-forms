import React from 'react'
import propTypes from '@dhis2/prop-types'
import { Field, FieldSet, Legend, Radio, Help } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const RadioGroup = ({
    label,
    required,
    disabled,
    options,
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
        <FieldSet>
            {label && <Legend required={required}>{label}</Legend>}

            {options.map(option => (
                <Radio
                    key={option.value}
                    name={name}
                    disabled={disabled}
                    value={option.value}
                    label={option.label}
                    checked={value === option.value}
                    onChange={onChange}
                    error={error}
                    warning={warning}
                    valid={valid}
                />
            ))}

            {helpText && <Help>{helpText}</Help>}

            {error && errorText && <Help error>{errorText}</Help>}
        </FieldSet>
    </Field>
)

RadioGroup.propTypes = {
    ...adapterComponentProps,
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.any.isRequired,
        })
    ).isRequired,
}

const RadioGroupAdapter = props => (
    <FieldAdapter {...props} component={RadioGroup} />
)

export { RadioGroupAdapter, RadioGroup }
