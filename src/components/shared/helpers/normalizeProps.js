const PRIMITIVE_TYPES = new Set(['string', 'number', 'boolean'])

const createDefaultChangeHandler = onChange => payload => {
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
