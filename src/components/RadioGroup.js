import React from 'react'
import { RadioGroupField, Radio } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'
import { toggleGroupPropTypes } from './ToggleGroup.js'

const RadioGroupComponent = ({ options, ...rest }) => (
    <RadioGroupField {...rest}>
        {options.map(({ value, label }) => (
            <Radio key={value} label={label} value={value} />
        ))}
    </RadioGroupField>
)
RadioGroupComponent.propTypes = toggleGroupPropTypes

const RadioGroup = props => (
    <FieldAdapter {...props} component={RadioGroupComponent} />
)

export { RadioGroup }
