import React from 'react'
import propTypes from '@dhis2/prop-types'
import { CheckboxField } from '@dhis2/ui-core'

import {
    createToggleChangeHandler,
    hasError,
    isValid,
    getValidationText,
} from './shared/helpers.js'

const Checkbox = props => (
    <CheckboxField
        checked={!!props.input.value}
        className={props.className}
        dataTest={props.dataTest}
        dense={props.dense}
        disabled={props.disabled}
        error={hasError(props)}
        helpText={props.helpText}
        initialFocus={props.initialFocus}
        label={props.label}
        name={props.name || props.input.name}
        onBlur={props.onBlur || props.input.onBlur}
        onChange={createToggleChangeHandler(props.input.onChange)}
        onFocus={props.onFocus || props.input.onFocus}
        required={props.required}
        tabIndex={props.tabIndex}
        valid={isValid(props)}
        validationText={getValidationText(props)}
        value={props.checkedValue}
        warning={props.warning}
    />
)

Checkbox.propTypes = {
    meta: propTypes.shape({
        touched: propTypes.bool,
        invalid: propTypes.bool,
        valid: propTypes.bool,
        error: propTypes.string,
    }),
    input: propTypes.shape({
        name: propTypes.string.isRequired,
        onBlur: propTypes.func,
        onChange: propTypes.func.isRequired,
        onFocus: propTypes.func,
        value: propTypes.any,
    }),
    checked: propTypes.bool,
    checkedValue: propTypes.string,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: propTypes.bool,
    helpText: propTypes.string,
    initialFocus: propTypes.bool,
    label: propTypes.node.isRequired,
    name: propTypes.string,
    onBlur: propTypes.func,
    onChange: propTypes.func,
    onFocus: propTypes.func,
    required: propTypes.bool,
    showValidStatus: propTypes.bool,
    tabIndex: propTypes.string,
    valid: propTypes.bool,
    validationText: propTypes.string,
    value: propTypes.string,
    warning: propTypes.bool,
}

export { Checkbox }
