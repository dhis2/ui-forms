import React from 'react'
import propTypes from '@dhis2/prop-types'
import { MultiSelectField, MultiSelectOption } from '@dhis2/ui-core'

import {
    createFocusHandler,
    createBlurHandler,
    hasError,
    isLoading,
    isValid,
    getValidationText,
} from './shared/helpers.js'
import { inputPropType, metaPropType } from './shared/propTypes.js'

const createSelectChangeHandler = ({ onChange }) => ({ selected }) => {
    const value = Array.isArray(selected) && selected.length > 0 ? selected : ''
    onChange(value)
}

const MultiSelect = ({
    error,
    input,
    loading,
    meta,
    onBlur,
    onFocus,
    options,
    showLoadingStatus,
    showValidStatus,
    valid,
    validationText,
    ...rest
}) => {
    return (
        <MultiSelectField
            {...rest}
            name={input.name}
            error={hasError(meta, error)}
            valid={isValid(meta, valid, showValidStatus)}
            loading={isLoading(meta, loading, showLoadingStatus)}
            validationText={getValidationText(meta, validationText, error)}
            onFocus={createFocusHandler(input, onFocus)}
            onChange={createSelectChangeHandler(input)}
            onBlur={createBlurHandler(input, onBlur)}
            selected={input.value || []}
        >
            {options.map(option => (
                <MultiSelectOption key={option.value} {...option} />
            ))}
        </MultiSelectField>
    )
}

MultiSelect.propTypes = {
    input: inputPropType.isRequired,
    meta: metaPropType.isRequired,

    error: propTypes.bool,
    loading: propTypes.bool,
    options: MultiSelectField.propTypes.selected,
    showLoadingStatus: propTypes.bool,
    showValidStatus: propTypes.bool,
    valid: propTypes.bool,
    validationText: propTypes.string,

    onBlur: propTypes.func,
    onFocus: propTypes.func,
}

export { MultiSelect }
