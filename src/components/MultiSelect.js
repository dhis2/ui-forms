import React from 'react'
import propTypes from '@dhis2/prop-types'
import { MultiSelectField, MultiSelectOption } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'

const createChangeHandler = onChange => ({ selected }) => {
    const value = selected.map(({ value }) => value)
    onChange({ value }, null)
}

const filterSelectedOptions = (options, value) => {
    const selectedValues = new Set(value || [])
    return options.filter(({ value }) => selectedValues.has(value))
}

const MultiSelectComponent = ({ options, value, onChange, ...rest }) => {
    const renderOptions = Array.isArray(options) ? options : []

    return (
        <MultiSelectField
            {...rest}
            selected={filterSelectedOptions(renderOptions, value)}
            onChange={createChangeHandler(onChange)}
        >
            {renderOptions.map(option => (
                <MultiSelectOption key={option.value} {...option} />
            ))}
        </MultiSelectField>
    )
}

// eslint-disable-next-line no-unused-vars
const { selected, value, ...MultiSelectProps } = MultiSelectField.propTypes

MultiSelectComponent.propTypes = {
    ...MultiSelectProps,
    options: MultiSelectField.propTypes.selected,
    value: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.string),
        propTypes.oneOf(['']),
    ]),
}

const MultiSelect = props => (
    <FieldAdapter {...props} component={MultiSelectComponent} />
)

export { MultiSelect }
