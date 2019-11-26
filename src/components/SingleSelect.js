import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'

const createChangeHandler = onChange => ({ selected }) =>
    onChange({ value: selected.value }, null)

const SingleSelectComponent = ({ options, value, onChange, ...rest }) => {
    const renderOptions = Array.isArray(options) ? options : []
    const selectedOption = renderOptions.find(o => o.value === value) || {}

    return (
        <SingleSelectField
            {...rest}
            selected={selectedOption}
            onChange={createChangeHandler(onChange)}
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
