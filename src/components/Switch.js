import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SwitchField } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'
import { createToggleChangeHandler } from './shared/helpers.js'

const SwitchComponent = ({ onChange, value, checkedValue, ...rest }) => (
    <SwitchField
        {...rest}
        checked={!!value}
        value={checkedValue}
        onChange={createToggleChangeHandler(onChange)}
    />
)

SwitchComponent.propTypes = {
    ...adapterComponentProps,
    checkedValue: propTypes.string,
}

const Switch = props => <FieldAdapter {...props} component={SwitchComponent} />

export { Switch }
