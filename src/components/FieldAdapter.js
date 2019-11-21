import React, { useCallback } from 'react'
import propTypes from '@dhis2/prop-types'
import { fieldRenderProps, fieldInputProps, fieldMetaProps } from './Field'

const PRIMITIVE_TYPES = new Set(['string', 'number', 'boolean'])

const useChangeHandler = onChange =>
    useCallback(
        payload => {
            const value =
                // ui-core event signature
                (payload && payload.value) ||
                // synthetic event
                (payload && payload.target && payload.target.value) ||
                // directly usable value
                (PRIMITIVE_TYPES.has(typeof payload) && payload) ||
                // ¯\_(ツ)_/¯
                ''

            onChange(value)
        },
        [onChange]
    )

const FieldAdapter = ({ input, meta, component: Component, ...ownProps }) => {
    const handleChange = useChangeHandler(input.onChange)
    const error = ownProps.error || (meta.touched && meta.invalid)

    return (
        <Component
            {...input}
            {...meta}
            {...ownProps}
            error={error}
            valid={
                ownProps.valid ||
                (ownProps.showValidStatus && meta.touched && meta.valid)
            }
            loading={
                ownProps.loading ||
                (ownProps.showLoadingStatus && meta.validating)
            }
            validationText={
                ownProps.validationText || (error && meta.error) || ''
            }
            onChange={handleChange}
        />
    )
}

FieldAdapter.propTypes = {
    ...fieldRenderProps,
    component: propTypes.oneOfType([propTypes.func, propTypes.object])
        .isRequired,
}

const adapterComponentProps = {
    ...fieldInputProps,
    ...fieldMetaProps,
    // computed props
    error: propTypes.bool,
    valid: propTypes.bool,
    loading: propTypes.bool,
    validationText: propTypes.string,
    // other commmon props used by input components
    className: propTypes.string,
    label: propTypes.string,
    required: propTypes.bool,
    disabled: propTypes.bool,
    warning: propTypes.bool,
    helpText: propTypes.string,
    tabIndex: propTypes.string,
}

export { FieldAdapter, adapterComponentProps }
