import React from 'react'
import propTypes from '@dhis2/prop-types'
import { CheckboxField } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'
import { useToggleChangeHandler } from './shared/hooks.js'

const CheckboxComponent = ({ onChange, value, checkedValue, ...rest }) => {
    const handleChange = useToggleChangeHandler(onChange)

    return (
        <CheckboxField
            {...rest}
            checked={!!value}
            value={checkedValue}
            onChange={handleChange}
        />
    )
}

CheckboxComponent.propTypes = {
    ...adapterComponentProps,
    checkedValue: propTypes.string,
}

const Checkbox = props => (
    <FieldAdapter {...props} component={CheckboxComponent} />
)

export { Checkbox }
