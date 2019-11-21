import React from 'react'
import { RadioGroupField, Radio } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'
import { toggleGroupOptionsProp } from './shared/propTypes.js'

const RadioGroupComponent = ({ options, ...rest }) => (
    <RadioGroupField {...rest}>
        {options.map(({ value, label }) => (
            <Radio key={value} label={label} value={value} />
        ))}
    </RadioGroupField>
)
RadioGroupComponent.propTypes = {
    ...adapterComponentProps,
    options: toggleGroupOptionsProp,
}

const RadioGroup = props => (
    <FieldAdapter {...props} component={RadioGroupComponent} />
)

export { RadioGroup }
