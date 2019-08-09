import { Radio as RadioOrig } from '@dhis2/ui-core'
import { useField } from 'react-final-form'
import React from 'react'
import propTypes from 'prop-types'

import { Radio } from './Radio.js'
import { conditional } from './helper/conditional.js'
import { styles } from './RadioGroup/styles.js'

const RadioGroup = ({ label, name, options, validate, defaultValue }) => {
    return (
        <div className="container">
            <span className="label">{label}</span>

            <div className="inputs">
                {options.map(option => (
                    <div className="input">
                        <Radio
                            name={name}
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            validate={validate}
                            defaultValue={defaultValue}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{styles}</style>
        </div>
    )
}

RadioGroup.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    options: propTypes.arrayOf(
        propTypes.shape({
            value: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
        })
    ).isRequired,

    validate: propTypes.func,
    defaultValue: propTypes.string,
}

const ConditionalRadioGroup = conditional(RadioGroup)

export { RadioGroup, ConditionalRadioGroup }
