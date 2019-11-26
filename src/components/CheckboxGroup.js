import React from 'react'
import { CheckboxGroupField, Checkbox } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'
import { toggleGroupOptionsProp } from './shared/propTypes.js'

const createChangeHandler = (currentValues, onChange) => payload => {
    const activeIndex = currentValues.indexOf(payload.value)
    const valueArray =
        activeIndex === -1
            ? [...currentValues, payload.value]
            : currentValues
                  .slice(0, activeIndex)
                  .concat(currentValues.slice(activeIndex + 1))
    const value = valueArray.length === 0 ? '' : valueArray

    onChange({ value }, null)
}

const CheckboxGroupComponent = ({ options, value, onChange, ...rest }) => (
    <CheckboxGroupField
        {...rest}
        value={value || []}
        onChange={createChangeHandler(value, onChange)}
    >
        {options.map(({ value, label }) => (
            <Checkbox key={value} label={label} value={value} />
        ))}
    </CheckboxGroupField>
)

CheckboxGroupComponent.propTypes = {
    ...adapterComponentProps,
    options: toggleGroupOptionsProp.isRequired,
}

const CheckboxGroup = props => (
    <FieldAdapter {...props} component={CheckboxGroupComponent} />
)

export { CheckboxGroup }
