import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui-core'

import { normalizeProps } from './shared/helpers'
import { fieldRenderProps } from './shared/propTypes'

const createChangeHandler = props => ({ selected }) =>
    props.input.onChange(selected)

const SingleSelect = props => {
    const { options = [], value, onChange, ...rest } = normalizeProps(
        props,
        createChangeHandler(props)
    )

    return (
        <SingleSelectField {...rest} selected={value || {}} onChange={onChange}>
            {options.map(option => (
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
