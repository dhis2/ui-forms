import React from 'react'
import propTypes from '@dhis2/prop-types'
import { CheckboxField } from '@dhis2/ui-core'

import { createToggleChangeHandler, normalizeProps } from './shared/helpers.js'
import { fieldRenderProps } from './Field.js'

const Checkbox = props => {
    const { value, checkedValue, ...rest } = normalizeProps(
        props,
        createToggleChangeHandler(props.input.onChange)
    )

    return <CheckboxField {...rest} checked={!!value} value={checkedValue} />
}

Checkbox.propTypes = {
    ...fieldRenderProps,
    ...CheckboxField.propTypes,
    checkedValue: propTypes.string,
}

export { Checkbox }
