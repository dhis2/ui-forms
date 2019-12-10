import React from 'react'
import propTypes from '@dhis2/prop-types'
import { MultiSelectField, MultiSelectOption } from '@dhis2/ui-core'

import { normalizeProps } from './shared/helpers.js'
import { fieldRenderProps } from './shared/propTypes.js'

const createChangeHandler = ({ input }) => ({ selected }) => {
    input.onChange(selected)
}

const MultiSelect = props => {
    const { options = [], value, ...rest } = normalizeProps(
        props,
        createChangeHandler(props)
    )

    return (
        <MultiSelectField {...rest} selected={value || []}>
            {options.map(option => (
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
        MultiSelectField.propTypes.selected,
        propTypes.oneOf(['']),
    ]),
}

export { MultiSelect }
