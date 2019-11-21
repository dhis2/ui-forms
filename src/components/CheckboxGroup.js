import React from 'react'
import { CheckboxGroupField, Checkbox } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'
import { useToggleGroupChangeHandler } from './shared/hooks.js'
import { toggleGroupOptionsProp } from './shared/propTypes.js'

const CheckboxGroupComponent = ({ options, value, onChange, ...rest }) => {
    const handleChange = useToggleGroupChangeHandler(value, onChange)

    return (
        <CheckboxGroupField {...rest} value={value} onChange={handleChange}>
            {options.map(({ value, label }) => (
                <Checkbox key={value} label={label} value={value} />
            ))}
        </CheckboxGroupField>
    )
}

CheckboxGroupComponent.propTypes = {
    ...adapterComponentProps,
    options: toggleGroupOptionsProp,
}

const CheckboxGroup = props => (
    <FieldAdapter {...props} component={CheckboxGroupComponent} />
)

export { CheckboxGroup }
