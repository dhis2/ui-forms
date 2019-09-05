import React from 'react'
import propTypes from 'prop-types'
import { fieldRenderProps, fieldInputProps, fieldMetaProps } from './Field'

const FieldAdapter = ({ input, meta, component: Component, ...ownProps }) => (
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
            ownProps.loading || (ownProps.showLoadingStatus && meta.validating)
        }
        errorText={ownProps.errorText || meta.error || ''}
    />
)

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
