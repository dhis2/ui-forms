import React, { useCallback, useMemo } from 'react'
import propTypes from '@dhis2/prop-types'
import { MultiSelectField, MultiSelectOption } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'

const useChangeHandler = onChange =>
    useCallback(
        ({ selected }) => {
            const value = selected.map(({ value }) => value)
            onChange({ value }, null)
        },
        [onChange]
    )

const useSelectedOptions = (options, value) =>
    useMemo(() => {
        const selectedValues = new Set(value || [])
        return options.filter(({ value }) => selectedValues.has(value))
    }, [options, value])

const MultiSelectComponent = ({ options, value, onChange, ...rest }) => {
    const handleChange = useChangeHandler(onChange)
    const renderOptions = Array.isArray(options) ? options : []
    const selectedOptions = useSelectedOptions(renderOptions, value)

    return (
        <MultiSelectField
            {...rest}
            selected={selectedOptions}
            onChange={handleChange}
        >
            {renderOptions.map(option => (
                <MultiSelectOption key={option.value} {...option} />
            ))}
        </MultiSelectField>
    )
}

// eslint-disable-next-line no-unused-vars
const { selected, ...MultiSelectProps } = MultiSelectField.propTypes

MultiSelectComponent.propTypes = {
    options: MultiSelectField.propTypes.selected,
    value: propTypes.oneOfType([
        MultiSelectField.propTypes.selected,
        propTypes.oneOf(['']),
    ]),
    ...MultiSelectProps,
}

const MultiSelect = props => (
    <FieldAdapter {...props} component={MultiSelectComponent} />
)

export { MultiSelect }
