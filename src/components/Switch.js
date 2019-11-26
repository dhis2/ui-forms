import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SwitchField } from '@dhis2/ui-core'

import { createToggleChangeHandler, normalizeProps } from './shared/helpers.js'
import { fieldRenderProps } from './shared/propTypes.js'

const Switch = props => {
    const { value, checkedValue, ...rest } = normalizeProps(
        props,
        createToggleChangeHandler(props.input.onChange)
    )

    return <SwitchField {...rest} checked={!!value} value={checkedValue} />
}

Switch.propTypes = {
    ...fieldRenderProps,
    ...SwitchField.propTypes,
    checkedValue: propTypes.string,
}

export { Switch }
