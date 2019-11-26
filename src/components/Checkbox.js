import React from 'react'
import propTypes from '@dhis2/prop-types'
import { CheckboxField } from '@dhis2/ui-core'

import { FieldAdapter, adapterComponentProps } from './FieldAdapter.js'
import { createToggleChangeHandler } from './shared/helpers.js'

const CheckboxComponent = ({ onChange, value, checkedValue, ...rest }) => (
    <CheckboxField
        {...rest}
        checked={!!value}
        value={checkedValue}
        onChange={createToggleChangeHandler(onChange)}
    />
)

CheckboxComponent.propTypes = {
    ...adapterComponentProps,
    checkedValue: propTypes.string,
}

const Checkbox = props => (
    <FieldAdapter {...props} component={CheckboxComponent} />
)

export { Checkbox }
