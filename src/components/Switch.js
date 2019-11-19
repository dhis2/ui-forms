import React from 'react'
import { SwitchField } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'
import { Toggle, useToggleOnChange } from './Toggle.js'

const SwitchComponent = props => <Toggle {...props} component={SwitchField} />

SwitchComponent.propTypes = Toggle.propTypes

const Switch = props => (
    <FieldAdapter
        {...props}
        component={SwitchComponent}
        useOnChange={useToggleOnChange}
    />
)

export { Switch }
