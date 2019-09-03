import React from 'react'
import propTypes from 'prop-types'
import { FormControl, FieldSet, Legend, Radio, Help } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const RadioGroupComponent = ({
    label,
    required,
    options,
    name,
    value,
    onChange,
    error,
    warning,
    valid,
    helpText,
    errorText,
}) => {
    return (
        <FormControl>
            <FieldSet>
                {label && <Legend required={required}>{label}</Legend>}

                {options.map(option => (
                    <FormControl key={option.value}>
                        <Radio
                            name={name}
                            value={option.value}
                            label={option.label}
                            checked={value === option.value}
                            onChange={onChange}
                            error={error}
                            warning={warning}
                            valid={valid}
                        />
                    </FormControl>
                ))}

                {helpText && <Help>{helpText}</Help>}

                {error && errorText && <Help error>{errorText}</Help>}
            </FieldSet>
        </FormControl>
    )
}

RadioGroupComponent.propTypes = {
    ...adapterComponentProps,
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.any.isRequired,
        })
    ).isRequired,
}

const RadioGroup = props => (
    <FieldAdapter {...props} component={RadioGroupComponent} />
)

export { RadioGroup }
