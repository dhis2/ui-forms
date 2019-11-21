import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SwitchField } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'
import { useToggleChangeHandler } from './shared/hooks.js'

const SwitchComponent = ({ onChange, value, checkedValue, ...rest }) => {
    const handleChange = useToggleChangeHandler(onChange)

    return (
        <SwitchField
            {...rest}
            checked={!!value}
            value={checkedValue}
            onChange={handleChange}
        />
    )
}

SwitchComponent.propTypes = {
    ...adapterComponentProps,
    checkedValue: propTypes.string,
}

const Switch = props => <FieldAdapter {...props} component={SwitchComponent} />

export { Switch }
