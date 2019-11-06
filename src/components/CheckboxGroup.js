import React from 'react'
import { CheckboxGroupField, Checkbox } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'
import { MultiToggleGroup, toggleGroupPropTypes } from './ToggleGroup.js'

const CheckboxGroupComponent = props => (
    <MultiToggleGroup
        toggleComponent={Checkbox}
        toggleGroupComponent={CheckboxGroupField}
        {...props}
    />
)
CheckboxGroupComponent.propTypes = toggleGroupPropTypes

const CheckboxGroup = props => (
    <FieldAdapter {...props} component={CheckboxGroupComponent} />
)

export { CheckboxGroup }
