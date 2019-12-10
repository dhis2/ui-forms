import React, { useCallback } from 'react'
import propTypes from '@dhis2/prop-types'
import { fieldRenderProps, fieldInputProps, fieldMetaProps } from './Field'

const useAdapterOnChange = onChange =>
    useCallback(
        potentialEvent =>
            potentialEvent && potentialEvent.target
                ? onChange(potentialEvent.target.value)
                : onChange(potentialEvent),
        [onChange]
    )

const FieldAdapter = ({
    input,
    meta,
    component: Component,
    useOnChange,
    ...ownProps
}) => {
    const onChange = useOnChange(input.onChange)

    return (
        <Component
            {...input}
            {...meta}
            {...ownProps}
            error={ownProps.error || (meta.touched && meta.invalid)}
            valid={
                ownProps.valid ||
                (ownProps.showValidStatus && meta.touched && meta.valid)
            }
            loading={
                ownProps.loading ||
                (ownProps.showLoadingStatus && meta.validating)
            }
            errorText={ownProps.errorText || meta.error || ''}
            onChange={onChange}
        />
    )
}

FieldAdapter.propTypes = {
    ...fieldRenderProps,
    component: propTypes.oneOfType([propTypes.func, propTypes.object])
        .isRequired,
    useOnChange: propTypes.func,
}

FieldAdapter.defaultProps = {
    useOnChange: useAdapterOnChange,
}

const adapterComponentProps = {
    ...fieldInputProps,
    ...fieldMetaProps,
    // computed props
    error: propTypes.bool,
    valid: propTypes.bool,
    loading: propTypes.bool,
    errorText: propTypes.string,
    // other commmon props used by input components
    className: propTypes.string,
    label: propTypes.string,
    required: propTypes.bool,
    disabled: propTypes.bool,
    warning: propTypes.bool,
    helpText: propTypes.string,
}

export { FieldAdapter, adapterComponentProps }
