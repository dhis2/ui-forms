import React from 'react'
import propTypes from '@dhis2/prop-types'
import { MultiSelectField, MultiSelectOption } from '@dhis2/ui-core'

import { normalizeProps } from './shared/helpers.js'
import { fieldRenderProps } from './shared/propTypes.js'

const createChangeHandler = ({ input }) => ({ selected }) => {
    const values = selected.map(({ value }) => value)
    input.onChange(values)
}

const filterSelectedOptions = (options, value) => {
    const selectedValues = new Set(value || [])
    return options.filter(({ value }) => selectedValues.has(value))
}

const MultiSelect = props => {
    const { options, value, ...rest } = normalizeProps(
        props,
        createChangeHandler(props)
    )
    const renderOptions = Array.isArray(options) ? options : []
    const selectedOptions = filterSelectedOptions(renderOptions, value)

    return (
        <MultiSelectField {...rest} selected={selectedOptions}>
            {renderOptions.map(option => (
                <MultiSelectOption key={option.value} {...option} />
            ))}
        </MultiSelectField>
    )
}

// eslint-disable-next-line no-unused-vars
const { selected, value, ...MultiSelectProps } = MultiSelectField.propTypes

MultiSelect.propTypes = {
    ...fieldRenderProps,
    ...MultiSelectProps,
    options: MultiSelectField.propTypes.selected,
    value: propTypes.oneOfType([
        propTypes.arrayOf(propTypes.string),
        propTypes.oneOf(['']),
    ]),
}

export { MultiSelect }
