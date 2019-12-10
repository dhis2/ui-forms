const PRIMITIVE_TYPES = new Set(['string', 'number', 'boolean'])

const createDefaultChangeHandler = onChange => payload => {
    if (payload && 'value' in payload) {
        // ui-core event signature
        onChange(payload.value)
    } else if (payload && payload.target && 'value' in payload.target) {
        // synthetic event
        onChange(payload.target.value)
    } else if (PRIMITIVE_TYPES.has(typeof payload)) {
        // directly usable value
        onChange(payload)
    } else {
        // ¯\_(ツ)_/¯
        throw new Error('Could not process event payload')
    }
}

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
        onChange: changeHandler || createDefaultChangeHandler(input.onChange),
    }
}

export { normalizeProps }
