import React from 'react'
import propTypes from 'prop-types'
import { RadioGroupField, Radio } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'

const RadioGroupComponent = ({ options, ...rest }) => (
    <RadioGroupField {...rest}>
        {options.map(({ value, label }) => (
            <Radio key={value} label={label} value={value} />
        ))}
    </RadioGroupField>
)

RadioGroupComponent.propTypes = {
    ...adapterComponentProps,
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
        })
    ).isRequired,
}

const RadioGroup = props => (
    <FieldAdapter {...props} component={RadioGroupComponent} />
)

export { RadioGroup }
