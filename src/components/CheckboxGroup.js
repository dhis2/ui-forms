import React from 'react'
import { CheckboxGroupField, Checkbox } from '@dhis2/ui-core'

import { normalizeProps } from './shared/helpers.js'
import { toggleGroupOptionsProp } from './shared/propTypes.js'
import { fieldRenderProps } from './Field.js'

const createChangeHandler = (currentValues, onChange) => payload => {
    const activeIndex = currentValues.indexOf(payload.value)
    const valueArray =
        activeIndex === -1
            ? [...currentValues, payload.value]
            : currentValues
                  .slice(0, activeIndex)
                  .concat(currentValues.slice(activeIndex + 1))
    const value = valueArray.length === 0 ? '' : valueArray

    onChange(value)
}

const CheckboxGroup = props => {
    const { value, options, ...rest } = normalizeProps(
        props,
        createChangeHandler(props.input.value, props.input.onChange)
    )

    return (
        <CheckboxGroupField {...rest} value={value || []}>
            {options.map(({ value, label }) => (
                <Checkbox key={value} label={label} value={value} />
            ))}
        </CheckboxGroupField>
    )
}

// eslint-disable-next-line no-unused-vars
const { children, ...CheckboxGroupProps } = CheckboxGroupField.propTypes

CheckboxGroup.propTypes = {
    ...fieldRenderProps,
    ...CheckboxGroupProps,
    options: toggleGroupOptionsProp.isRequired,
}

export { CheckboxGroup }
