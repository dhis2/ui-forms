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
    checkedValue,
    error,
    input,
    meta,
    showValidStatus,
    valid,
    validationText,
    onBlur,
    onFocus,
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
    checkedValue: propTypes.string,
    error: propTypes.bool,
    input: propTypes.shape({
        name: propTypes.string.isRequired,
        onChange: propTypes.func.isRequired,
        value: propTypes.any,
        onBlur: propTypes.func,
        onFocus: propTypes.func,
    }),
    meta: propTypes.shape({
        error: propTypes.string,
        invalid: propTypes.bool,
        touched: propTypes.bool,
        valid: propTypes.bool,
    }),
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,
    onBlur: propTypes.func,
    onFocus: propTypes.func,
}

export { Checkbox }
