import { createChangeHandler } from './createChangeHandler.js'

// TODO: remove once all components have been ported
const normalizeProps = ({ input, meta, ...ownProps }, changeHandler) => {
    const error = ownProps.error || (meta.touched && meta.invalid)

    return {
        ...input,
        ...meta,
        ...ownProps,
        error,
        valid:
            ownProps.valid ||
            (ownProps.showValidStatus && meta.touched && meta.valid),
        loading:
            ownProps.loading || (ownProps.showLoadingStatus && meta.validating),
        validationText: ownProps.validationText || (error && meta.error) || '',
        onChange: changeHandler || createChangeHandler(input),
    }
}

export { normalizeProps }
