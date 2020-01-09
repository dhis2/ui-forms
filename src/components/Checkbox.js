import React from 'react'
import propTypes from '@dhis2/prop-types'
import { CheckboxField } from '@dhis2/ui-core'

import {
    createToggleChangeHandler,
    createFocusHandler,
    createBlurHandler,
    hasError,
    isValid,
    getValidationText,
} from './shared/helpers.js'

const Checkbox = ({
    input,
    meta,
    checkedValue,
    error,
    onBlur,
    onFocus,
    showValidStatus,
    valid,
    validationText,
    ...rest
}) => (
    <CheckboxField
        {...rest}
        checked={!!input.value}
        name={input.name}
        error={hasError(meta, error)}
        valid={isValid(meta, valid, showValidStatus)}
        validationText={getValidationText(meta, validationText, error)}
        onFocus={createFocusHandler(input, onFocus)}
        onChange={createToggleChangeHandler(input)}
        onBlur={createBlurHandler(input, onBlur)}
        value={checkedValue}
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
    checkedValue: propTypes.string,
    error: propTypes.bool,
    onBlur: propTypes.func,
    onFocus: propTypes.func,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,
}

export { Checkbox }
