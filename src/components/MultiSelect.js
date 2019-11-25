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
    const selectedOption = useSelectedOptions(options, value)

    return (
        <MultiSelectField
            {...rest}
            selected={selectedOption}
            onChange={handleChange}
        >
            {Array.isArray(options)
                ? options.map(option => (
                      <MultiSelectOption key={option.value} {...option} />
                  ))
                : undefined}
        </MultiSelectField>
    )
}

MultiSelectComponent.propTypes = {
    options: MultiSelectField.propTypes.selected,
    value: propTypes.string,
    ...MultiSelectField.propTypes,
}

const MultiSelect = props => (
    <FieldAdapter {...props} component={MultiSelectComponent} />
)

export { MultiSelect }
