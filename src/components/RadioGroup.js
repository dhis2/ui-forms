import React from 'react'
import { RadioGroupField, Radio } from '@dhis2/ui-core'

import { toggleGroupOptionsProp, fieldRenderProps } from './shared/propTypes.js'
import { normalizeProps } from './shared/helpers.js'

const RadioGroup = props => {
    const { options, ...rest } = normalizeProps(props)

    return (
        <RadioGroupField {...rest}>
            {options.map(({ value, label }) => (
                <Radio key={value} label={label} value={value} />
            ))}
        </RadioGroupField>
    )
}

RadioGroup.propTypes = {
    ...fieldRenderProps,
    ...RadioGroupField.propTypes,
    options: toggleGroupOptionsProp.isRequired,
}

export { RadioGroup }
