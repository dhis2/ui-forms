import React from 'react'
import { CheckboxField } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'
import { Toggle, useToggleOnChange } from './Toggle.js'

const CheckboxComponent = props => (
    <Toggle {...props} component={CheckboxField} />
)

CheckboxComponent.propTypes = Toggle.propTypes

const Checkbox = props => (
    <FieldAdapter
        {...props}
        component={CheckboxComponent}
        useOnChange={useToggleOnChange}
    />
)

export { Checkbox }
