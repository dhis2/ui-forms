import React from 'react'
import { SwitchGroupField, Switch } from '@dhis2/ui-core'

import { FieldAdapter } from './FieldAdapter.js'
import { MultiToggleGroup, toggleGroupPropTypes } from './ToggleGroup.js'

const SwitchGroupComponent = props => (
    <MultiToggleGroup
        toggleComponent={Switch}
        toggleGroupComponent={SwitchGroupField}
        {...props}
    />
)
SwitchGroupComponent.propTypes = toggleGroupPropTypes

const SwitchGroup = props => (
    <FieldAdapter {...props} component={SwitchGroupComponent} />
)

export { SwitchGroup }
