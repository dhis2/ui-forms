import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui-core'

import { normalizeProps } from './shared/helpers'
import { fieldRenderProps } from './shared/propTypes'

const createChangeHandler = props => payload =>
    props.input.onChange(payload.selected.value)

const SingleSelect = props => {
    const { options, value, onChange, ...rest } = normalizeProps(
        props,
        createChangeHandler(props)
    )
    const renderOptions = Array.isArray(options) ? options : []
    const selectedOption = renderOptions.find(o => o.value === value) || {}

    return (
        <SingleSelectField
            {...rest}
            selected={selectedOption}
            onChange={onChange}
        >
            {renderOptions.map(option => (
                <SingleSelectOption key={option.value} {...option} />
            ))}
        </SingleSelectField>
    )
}

SingleSelect.propTypes = {
    ...fieldRenderProps,
    ...SingleSelectField.propTypes,
    options: propTypes.arrayOf(SingleSelectField.propTypes.selected),
    value: propTypes.string,
}

export { SingleSelect }
