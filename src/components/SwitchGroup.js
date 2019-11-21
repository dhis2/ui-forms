import React from 'react'
import { SwitchGroupField, Switch } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'
import { useToggleGroupChangeHandler } from './shared/hooks.js'
import { toggleGroupOptionsProp } from './shared/propTypes.js'

const SwitchGroupComponent = ({ options, value, onChange, ...rest }) => {
    const handleChange = useToggleGroupChangeHandler(value, onChange)

    return (
        <SwitchGroupField {...rest} value={value || []} onChange={handleChange}>
            {options.map(({ value, label }) => (
                <Switch key={value} label={label} value={value} />
            ))}
        </SwitchGroupField>
    )
}

SwitchGroupComponent.propTypes = {
    ...adapterComponentProps,
    options: toggleGroupOptionsProp,
}

const SwitchGroup = props => (
    <FieldAdapter {...props} component={SwitchGroupComponent} />
)

export { SwitchGroup }
