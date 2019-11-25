import React, { useCallback, useMemo } from 'react'
import propTypes from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'

const useChangeHandler = onChange =>
    useCallback(
        ({ selected }) => {
            onChange({ value: selected.value }, null)
        },
        [onChange]
    )

const useSelectedOption = (options, value) =>
    useMemo(() => options.find(o => o.value === value) || {}, [options, value])

const SingleSelectComponent = ({ options, value, onChange, ...rest }) => {
    const handleChange = useChangeHandler(onChange)
    const renderOptions = Array.isArray(options) ? options : []
    const selectedOption = useSelectedOption(renderOptions, value)

    return (
        <SingleSelectField
            {...rest}
            selected={selectedOption}
            onChange={handleChange}
        >
            {renderOptions.map(option => (
                <SingleSelectOption key={option.value} {...option} />
            ))}
        </SingleSelectField>
    )
}

SingleSelectComponent.propTypes = {
    options: propTypes.arrayOf(SingleSelectField.propTypes.selected),
    value: propTypes.string,
    ...SingleSelectField.propTypes,
}

const SingleSelect = props => (
    <FieldAdapter {...props} component={SingleSelectComponent} />
)

export { SingleSelect }
