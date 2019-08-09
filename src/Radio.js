import { useField } from 'react-final-form'
import { Radio as RadioOrig } from '@dhis2/ui-core'
import React, { Fragment } from 'react'
import propTypes from 'prop-types'

const Radio = ({ name, label, value, validate, defaultValue }) => {
    const { input, meta } = useField(name, {
        type: 'radio',
        value,
        validate,
        defaultValue,
    })

    return (
        <RadioOrig
            {...input}
            key={value}
            label={label}
            valid={!!input.value && !meta.error}
            error={meta.touched && !!meta.error}
            className="radio"
        />
    )
}

Radio.propTypes = {
    name: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,

    validate: propTypes.func,
    defaultValue: propTypes.string,
}

export { Radio }
